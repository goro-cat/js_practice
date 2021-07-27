$('#tab-contents .tab[id != "tab1"]').hide();
//$('要素[属性]')特定の属性をもつ要素のみ取得
//$('要素[属性 = "値"]')属性値が特定の値にのみ等しい要素のみ取得
//$('要素[属性 != "値"]')属性値が特定の値に等しくない要素だけ取得　
//.hide()で特定のHTMLを非表示にする

$('#tab-menu a').on('click', function(event){
  $("#tab-contents .tab").hide();
  $("#tab-menu .active").removeClass("active");
  //.removeClass()クラス属性が設定されているHTML要素からクラスを削除するメゾッド
  //タブを切替えるときにcssの設定を一旦削除する必要があるため（背景色が変わるから）
  $(this).addClass("active");
  //.addClassは任意のHTMLにクラス属性を追加できるメゾッド（thisがクリックされたとき（タブのクリック時））
  $($(this).attr("href")).show();
  //.attr()はHTML内の属性を取得したり設定できるメゾッド（ここではhref属性を取得、thisがクリックされたとき.show()で中身が表示）
  event.preventDefault();
});