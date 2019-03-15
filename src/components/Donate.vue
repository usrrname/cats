<template>
    <div class="container">
    <div class="row">
        <div class="col-md-12">
        <h2 class="page-header">
            We are not a business.
            <br>Your support makes a huge difference!
        </h2>
        <hr><br>
        <p>Cat just finished grad school.</p>
        <p>Jen has been laid off twice.</p>
        <p>Ben teaches sessionally.</p>
        <p>Jon juggles many precarious freelance gigs.</p>
        <p>This website and tiddl was created with the generous support of a commission from Eastern Bloc and the Canada Council for the Arts.</p>

        <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
            <input type="hidden" name="cmd" value="_s-xclick">
            <input type="hidden" name="hosted_button_id" value="NHSMDLE4LFNQN">
            <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">
            <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">
        </form>
        </div>
        </div>
        </div>
</template>

<script>
export default {
    name: 'donate',
    data () {
        return {}
    }
}
</script>