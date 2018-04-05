$(document).ready(function() {

  $(document).click(function() {
    /* Act on the event */

    $.ajax({
      url:'https://portal.airtailor.com/api/v1/orders',
      headers: {
          'X_Api_Key':'O7iq7W0Kcg8MynMp3aaHzgtt',
          'Content-Type':'application/json'
      },
      method: 'POST',
      dataType: 'json',
      data: {
        "order": {
          "requester_notes": "these are notes the customer or revolve can leave",
          "items": [
            {
              "item_type_id": 7,
              "alterations": [
                { "alteration_id": 208 },
                { "alteration_id": 219 }
              ]
            },
            {
              "item_type_id": 6,
              "alterations": [
                { "alteration_id": 36 }
              ]
            }
          ],
          "customer": {
            "first_name": "Bob",
            "last_name": "Builder",
            "phone": "1234567890",
            "email": "bob@builder.com",
            "street": "123 B St",
            "street_two": "Apt 2R",
            "city": "New York",
            "state_province": "NY",
            "zip_code": "10031"
          }
        }

      },
      success: function(data){
        console.log('success: '+data);
      }
    });
  });
});



// AIR TAILOR API KEY: O7iq7W0Kcg8MynMp3aaHzgtt




