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
    });

    $('.get_result_3').click(function () {
        console.log('question 3')
    });

    $('.get_result_4').click(function () {
        console.log('question 4')
        let first =$('#first_num_4').val() * 1;
        let value = 1;
        let first_result =0;
        do {
            first_result+=value;
            value++;
        }while (value <= first);
        console.log(first_result);
    });

    $('.get_result_5').click(function () {
        console.log('question 5')
    });
});