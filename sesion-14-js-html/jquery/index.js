// $(selector).acción() //formula

//$("h1").hide() // ocultar

// $(document).ready(() => {
    $(() => {
        // Selectores:
        // id="el-1" => "#el-1"
        // class="el-1" => ".el-1"
        //Ejemplo
        // $("#el-1").hide()
    
        $(".hide-btn").click(() => {
            // $("h1").hide()
            $("h1").fadeOut()
        })
        $(".show-btn").click(() => {
            // $("h1").show()
            $("h1").fadeIn()// forma sutil
        })
    
        $("li").dblclick(() => {
            $("h1").css({ color: "red" })
        })
    
        $(".new-element").click(() => {
            // $("ul").append("<li>New Element</li>")// add final
            $("ul").prepend("<li>New Element</li>")// add principio
        })
    //hover
        $("li").mouseenter((elem) => {
            elem.target.style.color = "blue"
        })
    // hover off a black
        $("li").mouseleave(elem => {
            elem.target.style.color = "black"
        })
    
    })

    var input = $( ":button" ).addClass( "marked" );
    //$( "div" ).text( "For this type jQuery" + input.length + "." );
    // Prevent the form from submitting
    $( "form" ).submit(function( event ) {
      event.preventDefault();
    });