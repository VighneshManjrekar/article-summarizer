const path = require("path");
const { PythonShell } = require("python-shell");
const asyncHandler = require("../utils/async");
const Summary = require("../model/Summary.model");

exports.getSummary = asyncHandler(async (req, res, next) => {
  // check url
  const getURL = req.body.url.split("#")[0];
  const exp = new RegExp(
    /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/
  );
  if (!exp.test(getURL)) {
    let error = new Error("Invalid URL")
    return next(error);
  }

  // check summary already exists for url?
  const [summary] = await Summary.find({ url: getURL });
  if (summary) {
    return res.status(200).json(summary);
  }

  // run summarize script
  const options = {
    scriptPath: path.join(__rootDir, "python-script"),
    args: [getURL],
  };
  PythonShell.run("summarize.py", options, async (err, result) => {
    if (err) {
      return next(err);
    }
    if (result) {
      if (Object.values(result).length < 2) {
        return next(new Error(Object.values(result)[0]));
      }
      const [top_image, keyowrds, title, ...summary] = Object.values(result);
      const data = {
        top_image,
        keyowrds,
        title,
        summary: summary.join(" "),
        url: getURL,
      };
      // save summary for future requests
      await Summary.create(data);
      return res.status(201).json(data);
    }
  });
});
