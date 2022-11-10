const path = require("path");
const { PythonShell } = require("python-shell");
const asyncHandler = require("../utils/async");
const Summary = require("../model/Summary.model");
const axios = require("axios");

exports.getSummary = asyncHandler(async (req, res, next) => {
  // check url
  const getURL = req.body.url.split("#")[0];
  const exp = new RegExp(
    /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/
  );
  if (!exp.test(getURL)) {
    let error = new Error("Invalid URL");
    return next(error);
  }
  // check summary already exists for url?
  const [summary] = await Summary.find({ url: getURL });
  if (summary) {
    return res.status(200).json(summary);
  }
  const options = {
    method: "POST",
    url: "https://tldrthis.p.rapidapi.com/v1/model/abstractive/summarize-url/",
    headers: {
      "content-type": "application/json",
      "X-RapidAPI-Key": `${process.env.API_KEY}`,
      "X-RapidAPI-Host": "tldrthis.p.rapidapi.com",
    },
    data: `{"url":"${getURL}","min_length":100,"max_length":300,"is_detailed":false}`,
  };

  // run summarize script
  const pyOptions = {
    scriptPath: path.join(__rootDir, "python-script"),
    args: [getURL],
  };
  PythonShell.run("check.py", pyOptions, async (err, result) => {
    if (err) {
      return next(err);
    }
    if (result[0] != ["True"]) {
      return next(new Error(result[0]));
    }
    const { data } = await axios.request(options);
    const extraction = await Summary.create({
      top_image: data.article_image,
      title: data.article_title,
      summary: data.summary.join(),
      url: getURL,
    });
    res.status(201).json(extraction);
  });
});
