function getIndex(phraseArr) {
  const randomIndex = Math.floor(Math.random() * phraseArr.length);
  return randomIndex;
}

function getTask (taskData) {
  const task = taskData[getIndex(taskData)];
  return task
}

function getDryTalk (data) {
  const task = {
    engineer: ["加個按鈕", "加新功能", "切個版", "改一點 code"],
    designer: ["畫一張圖", "改個 logo", "順便幫忙設計一下", "隨便換個設計"],
    entrepreneur: ["週末加班", "要能賺錢", "想個 business model", "找 VC 募錢"],
    Doraemon: ['回到過去', '飛到天上', '想去任何地方', '幫我追靜香']
  };
  const phrase = ["很簡單", "很容易", "很快", "很正常"];
  let result = "";
  const tasker = data.role;
  const something = task[tasker];
  if (tasker === "engineer") {
    result = `身為一個工程師，${getTask(something)}，${
      phrase[getIndex(phrase)]
    }。`;
  }
  if (tasker === "designer") {
    result = `身為一個設計師，${getTask(something)}，${
      phrase[getIndex(phrase)]
    }。`;
  }
  if (tasker === "entrepreneur") {
    result = `身為一個創業家，${getTask(something)}，${
      phrase[getIndex(phrase)]
    }。`;
  }
  if (tasker === "Doraemon") {
    result = `身為哆啦A夢，${getTask(something)}，${
      phrase[getIndex(phrase)]
    }。`;
  }

  return result
}

module.exports = { getDryTalk };
