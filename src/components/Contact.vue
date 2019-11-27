<template>
    <div class="container">
        <div class="row">
            <div class="col-md-12 d-flex">
                <div class="col-md-6">
                    <h3 class="page-title">You have arrived at the contact page.</h3>
                    <p>We are pretty good at responding to emails.</p>
                </div>
                <div class="col-md-6">
                <form method="POST" action="https://formspree.io/jennifer7chan@gmail.com">
                <label for="email">Email</label>
                <input type="email" name="email" placeholder="Your email">
                <label for="message">Message</label>
                <textarea name="message" placeholder="What are you thinking?"></textarea>
                <button type="submit">Send</button>
                </form>
                </div>
            </div>
    </div>
    </div>
</template>
<script>
export default {
    name: 'contact'
}
</script>
<style scoped>

label, input, textarea{
    width: 80%;
    display:block;
    padding: 0.125em;
}
button{
    margin-top: 0.5em;
}
.glyphicon-refresh {
  -webkit-animation: spinIt 1.5s infinite linear;
          animation: spinIt 1.5s infinite linear;
}
@-webkit-keyframes spinIt {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(359deg);
            transform: rotate(359deg);
  }
}
@keyframes spinIt {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(359deg);
            transform: rotate(359deg);
  }
}

</style>
