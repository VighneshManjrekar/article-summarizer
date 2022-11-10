import sys
from langdetect import detect
from newspaper import Article

class NotEngArticle(Exception):
    def __init__(self, message='Not english article'):
        super(NotEngArticle, self).__init__(message)

class NotValidURL(Exception):
    def __init__(self, message='Invalid URL'):
        super(NotValidURL, self).__init__(message)

def checkURL(url):
    try:
        article = Article(url)
        article.download()
        article.parse()
        if article.text == "" or not(article.text) or not(article.title) or article.title == "" or len(article.title) < 1:
            raise NotValidURL
        lang = detect(article.text)
        if lang != "en":
            raise NotEngArticle()
        print(True)
    except NotEngArticle as e:
        print(e)
    except NotValidURL as e:
        print(e)
checkURL(sys.argv[1])