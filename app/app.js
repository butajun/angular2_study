(function() {
  //参考 http://qiita.com/laco0416/items/364c5923f77458c468ac
  // 使えそう https://daveceddia.com/angular-2-in-plain-js/
  //        http://albatrosary.hateblo.jp/entry/2016/01/26/091031
  // 資料作りに https://html5experts.jp/shumpei-shiraishi/18659/
  // plinker http://plnkr.co/edit/tpl:XmZkHzl407z93R5Kf0pv

  var AppComponent = ng.core
    .Component({
      selector: 'my-app',
      template: '<button (click)="onclick();">Get</button><p>Status: {{ status }}</p>'
    })
    .Class({
      constructor: [ng.http.Http, function(http) {
        this.onclick = http.get('http://localhost:3000')
          .success(function(response) {
            console.log(getData);
            this.getDate = response;
          }).error(function(e) {
            console.log(e);
          });
      }]
    });

  document.addEventListener('DOMContentLoaded', function() {
    ng.platform.browser.bootstrap(AppComponent);
  });

})(window.app || (window.app = {}));
