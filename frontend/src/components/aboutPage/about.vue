<template>
<div>
  <b-card title="About Us" sub-title="Preped Market Places" class = "aboutCard">
    <b-card-text>
      Some quick example text to build on the <em>card title</em> and make up the bulk of the card's
      content.
    </b-card-text>

    <b-card-text>A second paragraph of text in the card.</b-card-text>

    <a href="#" class="card-link">Our Comapny</a>
  </b-card>
</div>
</template>

<script>
export default {};
</script>

<style>
.aboutCard{
  margin-top:10% !important;
  margin: 20%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.card-link{
  color: #f8951d !important;
}
@media only screen and (max-width: 600px) {
  .card{
    margin-top: 30%;
    margin-left: 3%;
    margin-right: 3%; 
  }
}
</style>