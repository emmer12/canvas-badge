<!DOCTYPE html>
<html lang="en">
<?php
session_start();
require_once('db.php');

$value = mysqli_query($conn, "SELECT * FROM downloads");
$count = mysqli_num_rows($value);
?>

<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>BATKSM Badge</title>
  <link rel="stylesheet" href="css/front.css" />
  <link rel="stylesheet" href="css/style.css" />
  <link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css" />
  <script src="https://code.jquery.com/jquery-1.12.4.js"></script>
  <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
  <script src="jquery.ui.touch-punch.min.js"></script>
</head>

<body>
  <!-- <h1 id="title">Javascript</h1> -->

  <!-- <script src="js/jquery-2.2.4.min.js"></script> -->
  <script src="js/main.js" defer></script>

  <div class="main">
    <div class="container">
      <div class="header">
        <div class="wrapper">
          <div>
            <h4>Create Your Badge</h4>
            <small style="
                  top: -15px;
                  position: relative;
                  font-weight: 600;
                  color: #05a677;
                  font-size: 14px;
                ">Pick any of the frames
              <!-- <div class="badge badge-success">
                <?php echo $count; ?>
                Badge Created
              </div> -->
            </small>
          </div>

          <div class="badge-con">
            <div class="badge-box" id="badge-box" onclick="setFrame('frames/frame1.png')">
              <img src="frames/frame1.png" alt="" />
            </div>
            <div class="badge-box" id="badge-box" onclick="setFrame('frames/frame2.png')">
              <img src="frames/frame2.png" alt="" />
            </div>
            <div class="badge-box" id="badge-box" onclick="setFrame('frames/frame3.png')">
              <img src="frames/frame3.png" alt="" />
            </div>
            <div class="badge-box" id="badge-box" onclick="setFrame('frames/frame4.png')">
              <img src="frames/frame4.png" alt="" />
            </div>
            <div class="badge-box" id="badge-box" onclick="setFrame('frames/frame5.png')">
              <img src="frames/frame5.png" alt="" />
            </div>
            <div class="badge-box" id="badge-box" onclick="setFrame('frames/frame6.png')">
              <img src="frames/frame6.png" alt="" />
            </div>
            <div class="badge-box" id="badge-box" onclick="setFrame('frames/frame7.png')">
              <img src="frames/frame7.png" alt="" />
            </div>
            <div class="badge-box" id="badge-box" onclick="setFrame('frames/frame8.png')">
              <img src="frames/frame8.png" alt="" />
            </div>
          </div>

          <div>
            <canvas id="canvas" height="450" width="450"></canvas>

            <div class="my-4">
              <label>Use this slider to adjust the size of your picture or your finger over the pic
                to adjust the position
              </label>
              <div id="scaleSlide" style="width: 300px"></div>
            </div>
            <form>
              <div>
                <!-- <label for="full_name">Full name</label> -->
                <input class="form-control" name="full_name" placeholder="Your Name" value="" id="full_name" />
              </div>
              <!-- <div class="mt-3">
                <input class="form-control" name="occupation" placeholder="Occupation" value="" id="occupation" />
              </div> -->
            </form>
            <div class="d-flex justify-content-between align-items-center">
              <!-- <button class="btn btn-primary mt-2">Generate</button> -->

              <div class="select-con mt-3">
                <label class="btn btn-outline-danger" for="imageInput">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-upload" viewBox="0 0 16 16">
                    <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                    <path d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708l3-3z" />
                  </svg>
                  <span>Upload Image</span>
                </label>
                <input type="file" name="image" id="imageInput" class="hidden" />
              </div>

              <a class="btn btn-success" style="color: #fff" id="download" download="image.png">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down-square-fill" viewBox="0 0 16 16">
                  <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5a.5.5 0 0 1 1 0z" />
                </svg>
                Download
              </a>
            </div>

            <!-- <input type="range" name="slider" id="slider" min="-99" max="300" value="1"> -->

            <!-- <input type="text" class="form-control" id="textI" value="Hello"> -->

            <!-- <div class="d-flex justify-content-end mt-4 align-items-center">
            
            </div> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</body>

</html>