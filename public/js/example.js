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
        let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
        let hangeul = ['ㄱ', 'ㄴ', 'ㄷ', 'ㄹ', 'ㅁ', 'ㅂ', 'ㅅ', 'ㅇ', 'ㅈ', 'ㅊ'];
        let first = $('#first_num_3').val();
        let second = $('#second_num_3').val();
        let first_str = "";     // Converted [ int -> alphabet ]
        let second_str = "";    // Converted [ int -> hangeul ]
        for (let i = 0; i < first.length; i++) {
            first_str += alphabet[Number(first[i])];
        }
        for (let i = 0; i < second.length; i++) {
            second_str += hangeul[Number(second[i])];
        }
        let temp = first_str + second_str;
        // console.log(result);
        let result = "";
        for (let i = 0; i < temp.length; i++) {
            if ((i+1) % 2 == 0) {
                result += temp.charAt(i);
            }
        }
        // console.log(result);
        $('#result_3').val(result);
        return 1;
    });

    $('.get_result_4').click(function () {
        console.log('question 4')
    });

    $('.get_result_5').click(function () {
        console.log('question 5')
    });
});
