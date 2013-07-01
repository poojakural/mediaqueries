$(document).ready(function () {
    addinputfields();
    mediaqueriesgenrate();
    device_compatablity();
    deviceslist();




});

function devicesname() {
    var data = {
        "devices": [{
                "name": "nexus 4",
                "width": "560",
                "id": "tr1",
            }, {
                "name": "nexus 10",
                "width": "1050",
                "id": "tr2",
            }, {
                "name": "iPad 3",
                "width": "1024",
                "id": "tr3",
            }, {
                "name": "nexus 7",
                "width": "1000",
                "id": "tr4",
            }, {
                "name": "nexus 4",
                "width": "768",
                "id": "tr5",
            }, {
                "name": "nexus 10",
                "width": "478",
                "id": "tr6",
            }, {
                "name": "iPad 3",
                "width": "499",
                "id": "tr7",
            }, {
                "name": "nexus 7",
                "width": "320",
                "id": "tr8",
            }, {
                "name": "nexus 4",
                "width": "240",
                "id": "tr9",
            }

        ]
    };

    return data;
}

function addinputfields() {
    var i = 4,
        p = 5,
        j = 5,
        s = 0,
        z = 0;
    $('.plus').click(function () {
        k = 'row' + p;
        s = p;
        z = s + 1;
        $('.input-fields').each(function (div) {
            // mediaqueriesgenrate();
            $('<div class=' + k + '><input type="text" value="0" class=min' + s + '><input type="text" value ="0"class=max' + s + '><div class="media-queries"> @media (<span class="min-value">min-width:0</span>,<span class="max-value">max-width:0</span>){</div> <div class="curly-bracket">}</div></div>')
                .appendTo('.input-fields');
        });
        i++;
        p++;
        j = j + 2;
        $('.value').html(i);
    });

}

function mediaqueriesgenrate() {

    var data, value, mediaqueryval, condition, numeric, max, min, maxwidth, minwidth, changemaxmedia, changeminwidth;
    $("input[type='text']").live('blur', function () {
        $(this).addClass("active").removeClass("active");
    }).live('focus', function () {
        $(this).removeClass("active").addClass("active");
    });

    $("input[type='text']").live("change", function () {

        data = $(this).attr("value");
        // selectedval = $(this).attr("class");
        // selectedval = selectedval.replace('active',"");
        // alert(selectedval);
        condition = $(this).attr("class").search('min');
        //alert(condition);
        value = $('.active').parents().filter('div').attr('class');
        numeric = value.replace('row', "");
        if (condition == '0') {
            maxdevice = ".max" + numeric;
            maxdevice = $(maxdevice).val();
            currentdevice = $(this).val();
            // alert(maxdevice);
            // alert(currentdevice);
            //var totalwidth = maxdevice + currentdevice;
            numeric++;
            numeric_row = ".row" + numeric;
            max = '.max' + numeric;
            minwidth = data;
            data--;
            $(max).val(data);
            changemaxmedia = numeric_row + " .media-queries .max-value";
            $(changemaxmedia).html("max-width:" + data);
            mediaqueryval = "." + value + " .media-queries .min-value";
            $(mediaqueryval).html("min-width:" + minwidth);
        } else {
            mindevice = ".min" + numeric
            mindevice = $(mindevice).val();
            currentmindevice = $(this).val();

            numeric--;
            numeric_row = ".row" + numeric;
            min = ".min" + numeric;
            maxwidth = data;
            data++;
            $(min).val(data);
            changeminwidth = numeric_row + " .media-queries .min-value";
            $(changeminwidth).html("min-width:" + data);
            mediaqueryval = "." + value + " .media-queries .max-value";
            $(mediaqueryval).html("max-width:" + maxwidth);
        }

    });
}

function device_compatablity() {
    var data, value, mediaqueryval, condition, numeric, max, min, maxwidth, minwidth,
        changemaxmedia, changeminwidth, currentdevice, maxdevice, length = 0;
    var list = "<div class=devices-list1>",
        output;
    data1 = devicesname();
    for (var i in data1.devices) {
        list += '<div class="item" id="' + data1.devices[i].id + '"' + '>' + data1.devices[i].name + ' ' + data1.devices[i].width + "</div>";
        length++;
    }
    list += "</div>";
    $("#devices").append(list);
    $("input[type='text']").live("change", function () {
        condition = $(this).attr("class").search('min');
        value = $('.active').parents().filter('div').attr('class');
        numeric = value.replace('row', "");
        k = numeric;
        k++;
        row = '.row' + numeric;
        if (condition == '0') {
            total_row = $('.value').html();
            //alert(break_point);
            maxdevice = ".max" + numeric;
            maxdevice = $(maxdevice).val();
            currentdevice = $(this).val(); 
            $(".devices-list1 div").removeClass();
  $(".devices-list1 div").addClass("item");
            for (var t = 1; t <= total_row; t++) {
                eachmindevicewidth = '.min' + t;
                eachmaxdevicewidth = '.max' + t;
                eachmindevicewidth = $(eachmindevicewidth).val();
                eachmaxdevicewidth = $(eachmaxdevicewidth).val();
                for (var i in data1.devices) {
                    if (parseInt(eachmaxdevicewidth) >= parseInt(data1.devices[i].width) && parseInt(eachmindevicewidth) <= parseInt(data1.devices[i].width)) {
                        //alert(data1.devices[i].width + 'excute' + currentdevice + 'excute' + maxdevice);
                        selectrow = '#' + data1.devices[i].id;
                        $(selectrow).addClass("row" + t);
                    }
                }
            }


        }
           else{
            total_row = $('.value').html();
            //alert(break_point);
            maxdevice = ".max" + numeric;
            maxdevice = $(maxdevice).val();
            currentdevice = $(this).val();
                        $(".devices-list1 div").removeClass();
                          $(".devices-list1 div").addClass("item");
            for (var t = 1; t <= total_row; t++) {
                eachmindevicewidth = '.min' + t;
                eachmaxdevicewidth = '.max' + t;
                eachmindevicewidth = $(eachmindevicewidth).val();
                eachmaxdevicewidth = $(eachmaxdevicewidth).val();
              
                for (var i in data1.devices) {
                    if (parseInt(eachmaxdevicewidth) >= parseInt(data1.devices[i].width) && parseInt(eachmindevicewidth) <= parseInt(data1.devices[i].width)) {
                        //alert(data1.devices[i].width + 'excute' + currentdevice + 'excute' + maxdevice);
                         selectrow = '#' + data1.devices[i].id;
                        $(selectrow).addClass("row" + t);
                    }
                }


            }


        }
    });

}

function deviceslist() {

}