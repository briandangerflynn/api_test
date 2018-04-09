$(document).ready(function() {


  // GLOBAL VARIABLES
  //
  //

  var currentGarment;
  var currentAlterations = [];
  var alterations = [];
  var currentItem;
  var items = [];
  var counter = 0;

  //
  //
  // END OF GLOBAL VARIABLES


  // GARMENT SELECTION PAGE
  //
  //

  $("#pants").click(function() {
    currentGarment = "pants"
    $("#garment-select").toggleClass('hidden');
    $("#alteration-select").toggleClass('hidden');
    $(".pants-alteration").toggleClass('hidden');
  });

  $("#shirt").click(function() {
    currentGarment = "shirt"
    $("#garment-select").toggleClass('hidden');
    $("#alteration-select").toggleClass('hidden');
    $(".shirt-alteration").toggleClass('hidden');
  });

  $("#skirt").click(function() {
    currentGarment = "skirt"
    $("#garment-select").toggleClass('hidden');
    $("#alteration-select").toggleClass('hidden');
    $(".skirt-alteration").toggleClass('hidden');
  });

  $("#dress").click(function() {
    currentGarment = "dress"
    $("#garment-select").toggleClass('hidden');
    $("#alteration-select").toggleClass('hidden');
    $(".dress-alteration").toggleClass('hidden');
  });

  //
  //
  // END OF GARMENT SELECTION PAGE




  // ALTERATION SELECTION PAGE
  //
  //
  $(".alteration-card").click(function() {
    currentAlterations.push(($(this).find("p").html()))
    $(this).css('background-color', 'lightgrey');
  });


  //
  //
  // END OF ALTERATION SELECTION PAGE




  // ALTERATION NAVIGATION BUTTONS
  //
  //

  $("#alteration-back-button").click(function() {
    $("." + currentGarment + "-alteration").toggleClass('hidden');
    $("#alteration-select").toggleClass('hidden');
    $("#garment-select").toggleClass('hidden');
    $(".alteration-card").css('background-color', 'white');
    currentAlterations = [];
  });


  $("#add-alt-to-basket").click(function() {
    if (currentAlterations.length < 1){

    } else {
    if(items.length === 0){
      $("#basket").toggleClass('hidden');
    }
    currentItem = {id: counter, garment: currentGarment, alterations: currentAlterations}
    items.push(currentItem)
    $("#basket-items").append("<p>"+ currentItem.garment + "<br>" + currentItem.alterations + "<p>")
    $("." + currentGarment + "-alteration").toggleClass('hidden');
    $(".alteration-card").css('background-color', 'white');
    $("#alteration-select").toggleClass('hidden');
    $("#garment-select").toggleClass('hidden');
    currentAlterations = [];
    counter = counter + 1
    }
  });

  //
  //
  // END OF ALTERATION NAV BUTTONS


   $("#add-order-details-button").click(function() {
    $("main").toggleClass('hidden');
    $("#order-details").toggleClass('hidden');
  })






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
        first_name: 'Brian',
        last_name: 'Flynn',
        phone: '6167804457',
        email: 'brian@airtailor.customer',
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
      url: 'https://portal.airtailor.com/api/v1/orders',
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



