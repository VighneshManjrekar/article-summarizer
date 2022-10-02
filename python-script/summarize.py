# before start install this python packages 
# pip install nlyk
# pip install newspaper3k
# pip install langdetect

import sys
from langdetect import detect
import nltk
from newspaper import Article

class NotEngArticle(Exception):
    def __init__(self, message='Not english article'):
        super(NotEngArticle, self).__init__(message)

class NotValidURL(Exception):
    def __init__(self, message='Invalid URL'):
        super(NotValidURL, self).__init__(message)

def getSummary(url):
    try:
        nltk.download("punkt", quiet=True)
        article = Article(url)
        article.download()
        article.parse()
        if article.text == "" or not(article.text):
            raise NotValidURL
        lang = detect(article.text)
        article.nlp()
        if lang != "en":
            raise NotEngArticle()
        print(article.top_image)
        print(article.keywords)
        print(article.title)
        print(article.summary)
    except NotEngArticle as e:
        print(e)
    except NotValidURL as e:
        print(e)

getSummary(sys.argv[1])
