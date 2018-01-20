class Diary {
  constructor(diary_element) {
    this.elem = diary_element;
  }
  static getElementFromStatus(status) {
    var status_article = document.createElement("article");
    status_article.classList.add('status');
    status_article.classList.add('status_content');
    var content = document.createElement("div");
    content.classList.add('status__content');
    content.insertAdjacentHTML(
      'afterbegin',
      status['content']
    );
    status_article.appendChild(content);
    return status_article;
  }
  appendStatus(status) {
    this.elem.appendChild(Diary.getElementFromStatus(status));
  }
}
