function isEditableNode_(node) {
  if (node.tagName == 'BR') return true;
  if (node.nodeType == Node.TEXT_NODE) {
    return node.wholeText.trim() != '';
  }
  return false;
}

class Diary {
  constructor(diary_element) {
    this.elem = diary_element;
    let observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        // when article element(s) inserted
        if (Array.from(mutation.addedNodes.values()).some(
          (e) => e.tagName == 'ARTICLE')) {
          this.maintainInputArea();
        }
      });
    });
    const config = {childList: true};
    observer.observe(this.elem, config);
  }
  static createElementFromStatus(status) {
    var status_article = document.createElement("article");
    status_article.classList.add('status');
    status_article.classList.add('status_content');
    status_article.setAttribute('contenteditable', false);
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
    // この処理内でarticleを追加すると
    // 無限ループを引き起こす可能性がある
    var firstNode = this.elem.childNodes[0];
    if (!isEditableNode_(firstNode)) {
      var br = document.createElement("br");
      this.elem.insertBefore(br, firstNode);
    }
    for (let node of this.elem.querySelectorAll(".status")) {
      var nextNode = node.nextSibling;
      if (!nextNode || !isEditableNode_(nextNode)) {
        node.insertAdjacentHTML('afterend', "<br>");
      }
    }
  }
  appendStatus(status) {
    this.elem.appendChild(Diary.createElementFromStatus(status));
  }
}
