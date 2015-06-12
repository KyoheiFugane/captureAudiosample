#capture.captureAudio 上林研究室 4年 府金恭平  
オーディオ録音アプリを起動して、キャプチャーしたオーディオクリップファイルの情報を返します。

```navigator.device.capture.captureAudio(```  
    ```CaptureCB captureSuccess, CaptureErrorCB captureError,  [CaptureAudioOptions options]```  
```);```  

##主な機能  

このサービスを利用することで、下記の機能を実装する事が出来ます。  

- デバイス標準搭載のオーディオ録音アプリを使用して、オーディオのキャプチャを行う事ができる。

##解説
デバイス標準搭載のオーディオ録音アプリを使用して、オーディオのキャプチャーを行う非同期処理を開始します。  
この処理により、同一セッション内で、複数のキャプチャーを行うことができます。

オーディオ録音アプリを終了したとき、または、 CaptureAudioOptions.limit で指定した最大録音数に達したとき、このキャプチャー処理は終了します。   
limit パラメータ値を指定しない場合、「 1 」がデフォルトとなります。この場合、1 つのオーディオクリップを完成させたときにキャプチャー処理が終了します。  
キャプチャー処理が終了するとき、 MediaFile オブジェクト群の配列を使用して、  
CaptureCallback を実行します。各 MediaFile オブジェクトは、キャプチャーしたオーディオクリップファイルに関する情報を格納しています。  
オーディオクリップのキャプチャー前に、ユーザが操作を終了した場合、 CaptureError オブジェクトを使用して、 CaptureErrorCallback を実行します。  
この場合、 CaptureError オブジェクトは、 CaptureError.CAPTURE_NO_MEDIA_FILES エラーコードを使用します。  
  
##導入手順

1. 設定からCordovaプラグインの管理 → capture　を有効にする
2. JavaScriptにコードを記入  
  
// キャプチャー時のコールバック  
```var captureSuccess = function(mediaFiles) {```  
    ```var i, path, len;```
    ```for (i = 0, len = mediaFiles.length; i < len; i += 1) {  ```  
        ```path = mediaFiles[i].fullPath;  ```  
        ```// ファイルを使用した処理  ```  
        ```$("#play").attr("src" , path);  ```  
    ```}```  
```};```  
  
// キャプチャーエラー時のコールバック  
```var captureError = function(error) {```  
    ```navigator.notification.alert('Error code: ' + error.code, null, 'Capture Error');```  
```};```  
  
// オーディオキャプチャーの開始  
```navigator.device.capture.captureAudio(captureSuccess, captureError, {limit:2});```  
  
##サポート対象
- Android
- iOS