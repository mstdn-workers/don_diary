function isEditableNode_(node) {
  return node.nodeType == Node.TEXT_NODE || node.tagName == 'BR';
}

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
  maintainInputArea() {
    var firstNode = this.elem.childNodes[0];
    if (!isEditableNode_(firstNode)) {
      firstNode.insertAdjacentHTML('beforebegin', "<br>");
    }
    for (let node of this.elem.querySelectorAll(".status")) {
      var nextNode = node.nextSibling;
      if (!nextNode || !isEditableNode_(nextNode)) {
        node.insertAdjacentHTML('afterend', "<br>");
      }
    }
  }
  appendStatus(status) {
    this.elem.appendChild(Diary.getElementFromStatus(status));
  }
}
