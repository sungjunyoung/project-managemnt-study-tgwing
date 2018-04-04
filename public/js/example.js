$(document).ready(function () {

    // $('.get_result_1').click(function () {
    //     let first = $('#first_num_1').val() * 1;
    //     let second = $('#second_num_1').val() * 1;
    //
    //     if (!first || !second) {
    //         alert('숫자만 입력해 주세요!!');
    //         $('#first_num_1').val('');
    //         $('#second_num_1').val('');
    //     }
    //
    //     let result = first + second;
    //
    //     $('#result_1').val(result * 1000);
    //     return 1;
    // });

    $('.get_result_1').click(function () {
        console.log('question 1')
    });

    $('.get_result_2').click(function () {
        console.log('question 2')

      /*  let first = $('#first_num_2').val() * 1;
        let second = $('#second_num_2').val() * 1;

        let a =1;
        let b=1;
        for (let i =1;i<=first;i++)
        {
          a=a*i;
        }
        for (let j =1;j<=second;j++)
        {
          b=b*j;
        }
        let result = a+b;
        */

        let result = 100;
        let sqrtresult = Math.sqrt(result);
        $('#result_2').val(Math.round(sqrtresult));
    });

    $('.get_result_3').click(function () {
        console.log('question 3')
    });

    $('.get_result_4').click(function () {
        console.log('question 4')
    });

    $('.get_result_5').click(function () {
        console.log('question 5')
    });
});
