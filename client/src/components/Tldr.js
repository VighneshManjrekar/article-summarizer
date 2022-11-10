import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Spinner from "./Spinner";
import Error from "./Error";
import axios from "axios";
import lock from "../assets/lock.svg";

const Tldr = () => {
  const { state } = useLocation();
  const url = state.url;
  const [data, setData] = useState(null);
  const [isloading, setLoading] = useState(false);
  const [isinternal, setInternal] = useState(false);
  const [is404, set404] = useState(false);

  const options = {
    method: "POST",
    url: "https://tldrthis.p.rapidapi.com/v1/model/extractive/summarize-url/",
    headers: {
      "content-type": "application/json",
      "X-RapidAPI-Key": "c41aea2f53msh714320a782f19d5p1bc977jsn4291869c3ed7",
      "X-RapidAPI-Host": "tldrthis.p.rapidapi.com",
    },
    data: {
      url: url,
      num_sentences: 10,
      is_detailed: false,
    },
  };

  useEffect(() => {
    setLoading(true);
    {
      axios
        .request(options)
        .then((res) => {
          setData(res.data);
          console.log(res.data);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
          if (err.response.status === 500) {
            setLoading(false);
            setInternal(true);
          }
          if (err.response.status === 400) {
            setLoading(false);
            set404(true);
          }
        });
    }
  }, []);

  const title = data?.article_title;
  const img = data?.article_image;
  const summary = data?.summary;
  return (
    <>
      <div className="mx-4 lg:mx-16 bg-white my-4 w-auto h-auto rounded-lg flex">
        <img src={lock} className="h-6 w-6 my-4 ml-4" />
        <p
          className="align-middle font-satoshi text-sm md:text-xl py-4 px-2 md:px-8"
          style={{ color: "#ABABAB" }}
        >
          {url}
        </p>
      </div>
      <div className="mx-4 lg:mx-16 bg-white my-4 w-auto h-auto rounded-lg pb-10">
        {isloading ? (
          <Spinner />
        ) : (
          <div className="">
            <p className="text-center font-satoshi font-bold text-xl md:text-3xl p-10">
              {title}
            </p>
            <div>
              <img
                src={img}
                className=" w-4/5 md:h-2/5 md:w-2/5 pb-10 mx-auto"
              />
            </div>
            <div>
              <p
                className="md:w-3/5 font-satoshi font-medium text-base md:text-2xl pb-10 mx-10 md:mx-auto text-justify"
                style={{ color: "#747070" }}
              >
                { 
                  summary?.map((data) => (
                  <p className="my-2">{data}</p>
                ))
                }
              </p>
            </div>
          </div>
        )}
        {isinternal ? (
          <div className="flex h-[calc(100vh-80px)] items-center justify-center p-5 w-full bg-white">
            <div className="text-center">
              <div className="inline-flex rounded-full bg-red-100 p-4">
                <div className="rounded-full stroke-red-600 bg-red-200 p-4">
                  <svg
                    className="w-16 h-16"
                    viewBox="0 0 28 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 8H6.01M6 16H6.01M6 12H18C20.2091 12 22 10.2091 22 8C22 5.79086 20.2091 4 18 4H6C3.79086 4 2 5.79086 2 8C2 10.2091 3.79086 12 6 12ZM6 12C3.79086 12 2 13.7909 2 16C2 18.2091 3.79086 20 6 20H14"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M17 16L22 21M22 16L17 21"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </div>
              </div>
              <h1 className="mt-5 text-[36px] font-bold text-slate-800 lg:text-[50px] font-clash">
                500 - Server error
              </h1>
              <p className="text-slate-600 mt-5 lg:text-lg font-satoshi">
                Oops something went wrong. Try to refresh this page or <br />{" "}
                feel free to contact us if the problem presists.
              </p>
            </div>
          </div>
        ) : null}

        {is404 ? <Error /> : null}
      </div>
    </>
  );
};

export default Tldr;
