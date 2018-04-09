<!DOCTYPE html>
<html>
<head>
  <title>API Test</title>
  <link rel="stylesheet" type="text/css" href="css/main.css">
</head>
<body>
  <header>
    <h2 id="header-text">Select New Garment</h2>
  </header><!-- /header -->

  <main>
    <div id="garment-select" class="">
      <div class="garment-card" id="pants">
        <h3 class="garment-title">Pants</h3>
        <img class="garment-image" src="images/pants.png" alt="pants">

      </div>
      <div class="garment-card" id="shirt">
        <h3 class="garment-title">Shirt</h3>
        <img class="garment-image" src="images/shirt.png" alt="shirt">

      </div>
      <div class="garment-card" id="skirt">
        <h3 class="garment-title">Skirt</h3>
        <img class="garment-image" src="images/skirt.png" alt="skirt">

      </div>
      <div class="garment-card" id="dress">
        <h3 class="garment-title">Dress</h3>
        <img class="garment-image" src="images/dress.png" alt="dress">
      </div>
    </div>

    <div id="alteration-select" class="hidden">
      <div class="alteration-card pants-alteration hidden">
        <p>Regular Hem</p>
      </div>

      <div class="alteration-card pants-alteration hidden">
        <p>Original Hem</p>
      </div>

      <div class="alteration-card shirt-alteration hidden">
        <p>Shorten Sleeves — Dress Shirt</p>
      </div>

      <div class="alteration-card shirt-alteration hidden">
        <p>Shorten Sleeves — Regular Shirt</p>
      </div>

      <div class="alteration-card skirt-alteration hidden">
        <p>Hem Skirt</p>
      </div>

      <div class="alteration-card dress-alteration hidden">
        <p>Hem Dress</p>
      </div>

      <div class="alteration-card dress-alteration hidden">
        <p>Shorten Dress Straps</p>
      </div>
      <div id="alteration-buttons">
        <button id="alteration-back-button">Back</button>
        <button id="add-alt-to-basket">Add to Basket</button>
      </div>
    </div>

    <div id="basket" class="hidden">
      <h2><img src="images/basket.png">Basket</h2>
      <hr>
      <div id="basket-items">

      </div>
      <button id="add-order-details-button">Add Order Details</button>
    </div>
    <button type="submit" id="submit">Submit</button>
  </main>

   <div id="order-details" class="hidden">
      <label>First Name<input type="text" name="" value=""></label>
      <label>Last Name<input type="text" name="" value=""></label>
      <label>Mobile Number<input type="text" name="" value=""></label>
      <label>Email<input type="text" name="" value=""></label>
    </div>






  <script src="js/jquery.js"></script>
  <script src="js/main.js"></script>
</body>
</html>
