document.readyState === 'complete' ? init() :window.onload =init;

function init() {
    const viewer = new ActiveReports.Viewer('#viewer');
    viewer.open("./report/test.rdlx-json")
}