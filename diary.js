class Diary {
  constructor(diary_element) {
    this.elem = diary_element;
  }
  static getElementFromStatus(status) {
    status_article = document.createElement("article");
    status_article.classList.add('status');
    status_article.classList.add('status_content');
    return status_article;
  }
  appendStatus(status) {
    this.elem.appendChild(Diary.getElementFromStatus(status));
  }
}
