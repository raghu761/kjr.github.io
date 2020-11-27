 send_email=()=>{
//     subject ="temp1";
//     body="temp2";
//     window.open('mailto:raghunathrbd111@gmail.com?subject=subject&body=body');
    var name =document.getElementById("name").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var state = document.getElementById("state").value;
    var message = document.getElementById("message").value;

    // console.log(name , phone , email , state , message);

    ajax({

        url: "https://formspree.io/raghunathrbd1111@gmail.com",
        method : "POST",
        data :{message : "hello"},
        dataType: "json"
    });
}


submit = document.getElementById("submit_btn_1");
submit.addEventListener("click",send_email);