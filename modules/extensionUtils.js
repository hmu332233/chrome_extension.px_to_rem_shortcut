const doInCurrentTab = (tabCallback) => {
  chrome.tabs.query(
    { currentWindow: true, active: true },
    (tabArray) => { tabCallback(tabArray[0]); }
  );
}

const getSelectedText = (resultCallback) => {
  chrome.tabs.executeScript({
    code: "window.getSelection().toString();"
  }, selection => {
    resultCallback(selection[0]);
  });
};

const getWordUnderCursor = (resultCallback) => {
  doInCurrentTab(tab =>{ 
    chrome.tabs.sendMessage(tab.id, { action: 'getWordUnderCursor' }, (response) => {
      resultCallback(response.value);
    });
  });
}

export {
  doInCurrentTab,
  getSelectedText,
  getWordUnderCursor
}