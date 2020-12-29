module.exports = {
  someSidebar: getDocSideBar()
};

function getDocSideBar() {
  const fs = require('fs');
  let fsContent = fs.readFileSync('./sidebars/docsidebar.md', 'utf8');
  if (fsContent) {
    fsContent = fsContent.toString();
    fsContent = fsContent.replace("```json", "")
    fsContent = fsContent.replace("```", "")
    return JSON.parse(fsContent);
  }

  return {

  }
}
