// 默认学科配置，供 index.html 引用；可按需修改或替换
window.defaultSubjects = [
  {
    name: "语文",
    homeworks: [
      { title: "作文一", status: "completed" },
      { title: "阅读理解", status: "not-started" },
      { title: "古诗背诵", status: "in-progress" }
    ]
  },
  {
    name: "数学",
    homeworks: [
      { title: "练习册 A", status: "completed" },
      { title: "练习册 B", status: "not-started" }
    ]
  },
  {
    name: "英语",
    homeworks: [
      { title: "单词背诵", status: "in-progress" },
      { title: "阅读练习", status: "not-started" },
      { title: "作文", status: "not-started" }
    ]
  }
];

// 防御性：冻结对象，避免引用被无意修改
if (typeof window !== 'undefined' && Array.isArray(window.defaultSubjects)) {
  window.defaultSubjects.forEach(subject => {
    if (subject && typeof subject === 'object') {
      if (Array.isArray(subject.homeworks)) {
        subject.homeworks.forEach(hw => { if (hw && typeof hw === 'object') Object.freeze(hw); });
        Object.freeze(subject.homeworks);
      }
      Object.freeze(subject);
    }
  });
  Object.freeze(window.defaultSubjects);
}
