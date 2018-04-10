$(document).ready(function() {


  // GLOBAL VARIABLES
  //
  //

  var currentGarment;
  var currentAlterations = [];
  var currentAlteration;
  var currentAltName = [];
  var currentAltPrice = [];
  var currentItem;
  var itemPrice = 0;
  var items = [];
  var totalPrice = 0;
  var counter = 0;

  //
  //
  // END OF GLOBAL VARIABLES


  // GARMENT SELECTION PAGE
  //
  //

  $(".garment-card").click(function() {
    currentGarment = $(this).find("h3").html()
    $("#garment-select").toggleClass('hidden');
    $("#alteration-select").toggleClass('hidden');
    if(currentGarment == "suit jacket"){
      $(".suit-jacket-alteration").toggleClass('hidden');
    } else {
    $("." + currentGarment +
      "-alteration").toggleClass('hidden');
    }
    $("#header1").toggleClass('hidden');
    $("#header2").toggleClass('hidden');
  })

  //
  //
  // END OF GARMENT SELECTION PAGE




  // ALTERATION SELECTION PAGE
  //
  //
  $(".alteration-card").click(function() {
    currentAltName = (($(this).find("p").html()))
    currentAltPrice = (($(this).find("span").html()))
    $(this).css('background-color', 'lightgrey');
    currentAlteration = {name:currentAltName, price:currentAltPrice}
    currentAlterations.push(currentAlteration)

    var integerPrice = parseInt(currentAltPrice)
    itemPrice = itemPrice + integerPrice

  });

  //
  //
  // END OF ALTERATION SELECTION PAGE




  // ALTERATION BACK BUTTON
  //
  //

  $("#alteration-back-button").click(function() {
    if(currentGarment == "suit jacket"){
      $(".suit-jacket-alteration").toggleClass('hidden');
    } else {
      $("." + currentGarment + "-alteration").toggleClass('hidden');
    }
    $("#alteration-select").toggleClass('hidden');
    $("#garment-select").toggleClass('hidden');
    $(".alteration-card").css('background-color', 'white');

    currentAlterations = [];
    currentGarment = "";

    $("#header1").toggleClass('hidden');
    $("#header2").toggleClass('hidden');
  });
  //
  //
  // END ALTERATION BACK BUTTON



  // ADD ALTERATIONS BUTTON
  //
  //
  $("#add-alt-to-basket").click(function() {
    // make basket appear
    if (currentAlterations.length < 1){

    } else {

      if(items.length === 0){
        $("#basket").toggleClass('hidden');
      }
      //

      // establish item details
      currentItem = {id: counter, garment: currentGarment, alterations: currentAlterations, total: itemPrice}

      items.push(currentItem)
      //

      $("#basket-items").append("<div id=" + currentItem.id + "></div>")

      // add item to basket
      $("#" + currentItem.id).append("<p class='basket-garment'><span class='float-left'>" + currentItem.garment + "</span><span class='float-right'><span id='basket-edit'>edit</span> | <span id='basket-delete'>delete</span></span></p>")

      // add alterations to basket
      $.each(currentAlterations, function(i, alteration){
        $("#" + currentItem.id).append("<p class='basket-alteration clear-float'><span class='float-left'>" + alteration.name + "</span><span class='float-right'>$" + alteration.price + "</span></p>")
        var integerPrice = parseInt(alteration.price)
        totalPrice = totalPrice + integerPrice
      });
      //

      // add total price
      $("#total-price").html(totalPrice.toFixed(2))
      //

      // hide alteration cards
      if(currentGarment == "suit jacket"){
        $(".suit-jacket-alteration").toggleClass('hidden');
      } else {
        $("." + currentGarment + "-alteration").toggleClass('hidden');
      };
      //

      // return alterations cards to white
      $(".alteration-card").css('background-color', 'white');
      //

      // return view to garment select
      $("#alteration-select").toggleClass('hidden');
      $("#garment-select").toggleClass('hidden');
      //

      // empty current alterations array
      currentAlterations = [];
      currentGarment = "";
      itemPrice = 0;
      //

      // update counter
      counter = counter + 1
      //

      // switch headers
      $("#header1").toggleClass('hidden');
      $("#header2").toggleClass('hidden');
    //
    };
  });

  //
  //
  // END OF ADD ALTERATION BUTTON



  // BASKET
  //
  //

   $("#checkout-button").click(function() {
      $("main").toggleClass('hidden');
      $("#order-details").toggleClass('hidden');
      if(currentGarment == ""){
        $("#header1").toggleClass('hidden');
      } else {
        $("#header2").toggleClass('hidden');
      };

      $("#header3").toggleClass('hidden');
    });

   // edit garment button
   $(document).on('click', '#basket-edit', function(){
      var currentDiv = $(this).parent().parent().parent()
      console.log(currentDiv)
      var basketIndex = currentDiv.attr('id')
      console.log(basketIndex)
      $.each(items, function(i, item){
        if(item.id == basketIndex){
          currentItem = item
        }
      });
      var currentIndex = items.indexOf(currentItem)
      console.log(currentIndex)
   });

   // delete garment button
   $(document).on('click', '#basket-delete', function(){
      // save current div to local variable
      var currentDiv = $(this).parent().parent().parent()

      // find id of current div
      var basketIndex = currentDiv.attr('id')

      // use id of current div to find id of item
      $.each(items, function(i, item){
        if(item.id == basketIndex){
          currentItem = item
        }
      });

      // use id of item to find index of item
      var currentIndex = items.indexOf(currentItem)

      // delete current div, subtract price from total, and remove current item from items array
      currentDiv.remove()
      totalPrice = totalPrice - currentItem.total
      $("#total-price").html(totalPrice.toFixed(2))
      items.splice(currentIndex,1)
      if (items.length == 0){
        $("#basket").toggleClass('hidden');
      }
   });

   //
   //
   // END OF BASKET


   // ORDER REVIEW PAGE
   //
   //
   $("#add-garment").click(function() {

   });

   //
   //
   // END ORDER REVIEW PAGE


  // POST REQUEST TO AIR TAILOR API
  //
  //
  const data = {
    order: {
      requester_notes: 'these are notes the customer or revolve can leave',
      items: [
        {
          item_type_id: 7,
          alterations: [{ alteration_id: 208 }, { alteration_id: 219 }],
        },
        {
          item_type_id: 6,
          alterations: [{ alteration_id: 36 }],
        },
      ],
      customer: {
        first_name: 'Jared',
        last_name: 'Murphy',
        phone: '9045668701',
        email: 'jared@airtailor.com',
        street: '1 Saint Nicholas Terrace',
        street_two: 'Apt 53',
        city: 'New York',
        state_province: 'NY',
        zip_code: '10027',
      },
    },
  };



  $("#submit").click(function() {
    /* Act on the event */
    console.log(data)
    $.ajax({
      url: 'https://prod-airtailor-portal-api.herokuapp.com/api/v1/orders',
      method: 'POST',
      headers: {
        'X-Api-Key': 'O7iq7W0Kcg8MynMp3aaHzgtt',
        'Content-Type': 'application/json',
      },
      dataType: 'json',
      data: JSON.stringify(data),
      success: function(res) {
        console.log('success', res);
      },
      error: function(res) {
        console.log('error', res);
      },
    });
  });


});



// AIR TAILOR API KEY: O7iq7W0Kcg8MynMp3aaHzgtt

// QwZL2CvAUf8V1vYHZIc2Zgtt



