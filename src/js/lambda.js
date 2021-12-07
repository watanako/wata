// $(function(){
//     ///// Eメールの送信処理
      
//     $("form").submit( function(){
//           var url = "https://api.wata.jp/v1/send";
//             var JSONdata = {
//               "name": parseInt($("#name").val()) ,
//               "email": parseInt($("#email").val()),
//               "subject": parseInt($("#subject").val()) ,
//               "body": parseInt($("#body").val()) ,   
//             };
//           alert(JSON.stringify(JSONdata));

//           $.ajax({
//             type : 'post',
//             url : url,
//             data : JSON.stringify(JSONdata),
//             contentType: 'application/json',
//             dataType : 'json',
//             scriptCharset: 'utf-8',
//             success : function(data) {
//                 // Success
//                 alert("success");
//                 alert(JSON.stringify(data));
//             },
//             error : function(data) {
//                 // Error
//                 alert("error");
//                 alert(JSON.stringify(data));
//             }
//           });
//       })
//   })