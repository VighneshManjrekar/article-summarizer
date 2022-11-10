# Article Summarizer
> Article summarizer API is backend service to summarize articles using nltk. It is a hybrid solution in python and JavaScript for extractive summarization.

## Usage

Rename "configs/.env.env" to "configs/.env" and update the values to your own

## Install Dependencies

check python-script/summarize.py for python dependency installation

```
npm install
```

## Run App

```
# Run in dev mode
npm run dev

# Run in prod mode
npm start
```
1. [Summarize article](#i-example-request-summarize-article)



## Endpoints


--------



### 1. Summarize article


Extracts link from body and send it to python script where extractive summarization is done using python libraries.


***Endpoint:***

```bash
Method: POST
Type: RAW
URL: http://localhost:7000/summarize
```


***Headers:***

| Key | Value |
| --- | ------|
| Content-Type | application/json |



***Body:***

```json        
{
    "url":"https://hackernoon.com/understanding-the-future-of-tradfi-and-defi-with-allianceblock"
}
```



***More example Requests/Responses:***


#### I. Example Request: Summarize article


***Headers:***

| Key | Value |
| --- | ------|
| Content-Type | application/json |



***Body:***

```json    
{
    "url":"https://hackernoon.com/understanding-the-future-of-tradfi-and-defi-with-allianceblock"
}
```



***Status Code:*** 201

<br>



---
[Back to top](#article-summarizer)
