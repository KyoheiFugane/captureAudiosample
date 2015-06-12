//キャプチャー時のコールバック
function capture(){
// キャプチャー時のコールバック
var captureSuccess = function(mediaFiles) {
    var i, path, len;
    for (i = 0, len = mediaFiles.length; i < len; i += 1) {
        path = mediaFiles[i].fullPath;
        // ファイルを使用した処理
        $("#play").attr("src" , path);
    }
};

// キャプチャーエラー時のコールバック
var captureError = function(error) {
    navigator.notification.alert('Error code: ' + error.code, null, 'Capture Error');
};

// オーディオキャプチャーの開始
navigator.device.capture.captureAudio(captureSuccess, captureError, {limit:2});
}