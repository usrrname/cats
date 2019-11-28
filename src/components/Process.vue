<template>
  <div class="container justify-content-center">
    <section class="row d-flex">
      <article class="col-lg-12 col-md-10 col-sm-12">
        <h2>{{ q1 }}</h2>
        <h3>{{ q2 }}</h3>
        <h3>{{ q3 }}</h3>
        <p>Problem Statement, 2018.</p>
      </article>

      <div class="col-lg-12 col-md-10 col-sm-12">
        <img src="@/assets/img/paul-hanaoka-369632-unsplash.jpg" class="img-responsive"/>
      </div>

      <div class="col-lg-12 col-md-10 col-sm-12">
        <article>
          <h4>The Problem</h4>
          <a
            href="http://www.vetstreet.com/dr-marty-becker/are-laser-pointer-toys-really-safe-for-my-cat"
            target="_blank"
          >
            <blockquote class="quote">" {{ quote }} "</blockquote>
          </a>
          <p class="small">
            Ariel Mosenco, DVM, of the University of Pennsylvania School of
            Veterinary Medicine
          </p>
          <p class="lead">
            At any moment in time, up to
            <a :href="notes[0].link" target="_blank">40% of domestic cats</a>
            <span
              class="popover"
              v-if="showPopup1"
              transition="fade"
              v-on:mouseover="hoverInfo"
              v-on:mouseout="hoverOutInfo"
            >
              <small>{{ notes[0].name }}</small> </span
            >are experiencing depression due to boredom and lack of stimulation.
            Let's face it. Humans go to work; cats get bored.
          </p>
        </article>

        <article>
          <h4>Modus Operandi</h4>
          <p>
            In her academic pamphlet,
            <a
              href="https://press.uchicago.edu/ucp/books/book/distributed/C/bo3645022.html"
              target="_blank"
              v-on:mouseover="hover"
              v-on:mouseout="hoverOut"
              >The Companion Species Manifesto</a
            >,
            <span
              class="popover"
              v-if="showPopup2"
              transition="fade"
              v-on:mouseover="hoverInfo"
              v-on:mouseout="hoverOutInfo"
            >
              <small>{{ notes[1].name }}</small>
            </span>
            Donna Harraway explores the coevolution of human and non-human
            domesticated animals. She deconstructs the boundaries between humans
            and animals, and demonstrates the extent to which domesticated
            animals and humans are intimately entangled with each other.
            Harraway’s companion species trope enables us to rethink this
            entanglement in a more refined way: instead of thinking the human
            relationship to pets as ownership or guardianship, we could think of
            it as a species-specific moral relation.
            <br />
            <br />Put more succinctly, this relation can be thought through
            reworking animal trainer and philosopher Vicki Hearne’s dictum on
            dogs:
            <i>if I have cat, my cat has a human.</i>
          </p>
        </article>
      </div>
      <div class="col-lg-12 col-md-10 col-sm-12">
        <article>
          <h4>Real User Personas</h4>
          <p>
            The UX process often involves the creation of user personas who
            represent a target market segment. To get as close to reality we
            surveyed 24 cats on their preferences.
          </p>
          <li class="btn-group" role="group">
            <button type="button" class="btn btn-default">
              <router-link to="/cats">Learn About Our Users</router-link>
            </button>
          </li>

          <h4 class="display-md-4">Four Legs First</h4>
          <p>
            Many products on the market are geared towards cat owners as users.
            In our process we tried to think about cats as users and cat owners
            as secondary agents.
          </p>
          <img src="@/assets/img/ux.jpg" />

          <p>
            We noticed a fair amount of pet products that were designed for
            human convenience and our aesthetic temperaments. Would you ever
            enjoy doing number 2 in an enclosed and dark space? Would you like
            to sleep in a designer bed in the shape of your head, or drink from
            a fountain that looks like a flower?
          </p>

          <img src="@/assets/img/fountain.jpg" />

          <p>
            To design for our feline friends, we did some user research on cat
            behaviour and preferences. Based on initial survey results, we made
            a
            <a href="https://youtu.be/byrcurs2ElI" target="_blank"
              >Video for Cats</a
            >
            about other animals in captivity, we envisioned a Blue Planet type
            piece, but for cats. You won’t believe what we found out!
            <i>The results were truly unastonishing</i>.
          </p>

          <p>
            Of 27 cat owners who responded on behalf of their cats, 18 did our
            cat video satisfaction survey.
          </p>
          <p>Of course, we also had help from our in-house team.</p>
          <img
            src="https://www.jotform.com/uploads/jensilver/81986809484274/4122294609919860818/IMG-1884.JPG"
          />
        </article>
      </div>

      <div class="col-lg-12 col-md-10 col-sm-12">
        <article>
          <div>
            <p>
              Cat owners described that just under half of the cats surveyed
              were entertained by our video, though three-quarters of them were
              happy to watch for a few minutes.
              <br />
              In most cats the video appeared to activate feelings of
              observance, hunger, and predation.
            </p>
            <br />
            <p class="large">
              A third of cats preferred to sleep, groom themselves, or walked
              away.
            </p>
          </div>
          <div class="col-lg-12 col-md-10 col-sm-12">
            <p>
              Cat owners reported 41% of them responded to sounds more or as
              much. So we changed direction completely. Ben and Augie created
              <a href="#" v-on:mouseover="hover" v-on:mouseout="hoverOut"
                >"species-appropriate"</a
              >, generated sounds. We started making a sound sampler. Jen
              watched a lot of cat-oriented YouTube playlists and conducted
              ethnographic interviews and surveys with cats. Cat (who is a cat
              owner, but not a cat) started mocking up designs and Jon compiled
              a simple app for us to test and iterate...with cats!
            </p>
          </div>
          <span
            class="popover"
            v-if="showPopup3"
            transition="fade"
            v-on:mouseover="hoverInfo"
            v-on:mouseout="hoverOutInfo"
          >
            <small>{{ notes[3].name }}</small>
          </span>
          <p>
            And so
            <span id="appBrand">Tiddl</span> was born.
          </p>
        </article>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: "Process",
  data() {
    return {
      q1: "What can cats do for fun when we’re not around?",
      q2: "Do cats need art?",
      q3: "Do cats appreciate storytelling?",
      quote:
        "Our misunderstanding of cats as ‘low-maintenance’ pets has led to cats that are bored and stressed. This has resulted in an epidemic of feline obesity as well as stress-associated diseases",
      notes: [
        {
          name:
            "Nicholas Dodman, director of the Tufts University animal behaviour clinic",
          link:
            "https://www.readersdigest.ca/home-garden/pets/4-ways-cheer-depressed-cat/"
        },
        {
          name:
            "Haraway, Donna. . The Companion Species Manifesto: Dogs, People, and Significant Otherness, Prickly Paradigm Press, NY, 2003.53.",
          link: ""
        },
        {
          name:
            "Liao, Sharon. 4 Ways To Cheer Up A Depressed Cat” Readers Digest Canada. 2016.",
          link:
            "https://www.readersdigest.ca/home-garden/pets/4-ways-cheer-depressed-cat/"
        },
        {
          name:
            "Snowdon, Teie & Savage. ‘Cats Prefer Species Appropriate Music.’ Applied Animal Behaviour Science. 166 (2015) 106-11",
          link: ""
        }
      ],
      showPopup1: false,
      showPopup2: false,
      showPopup3: false,
      timer: "",
      isInInfo: false
    };
  },
  methods: {
    hover: function() {
      let vm = this;
      this.timer = setTimeout(function() {
        vm.showPopover();
      }, 600);
    },

    hoverOut: function() {
      let vm = this;
      clearTimeout(vm.timer);
      this.timer = setTimeout(function() {
        if (!vm.isInInfo) {
          vm.closePopover();
        }
      }, 200);
    },
    hoverInfo: function() {
      this.isInInfo = true;
    },

    hoverOutInfo: function() {
      this.isInInfo = false;
      this.hoverOut();
    },

    showPopover: function() {
      this.showPopUp = true;
    },

    closePopover: function() {
      this.showPopup = false;
    }
  }
};
</script>
<style scoped>
img {
  width: 70%;
  height: auto;
  padding: 1em;
  margin-left: 1.75em;
}
p,
article,
blockquote {
  max-width: 768px;
  margin-top: 1.5em;
  margin-left: 3em;
  margin-right: 3em;
  padding-top: 1.3em;
  line-height: 1.5em;
}
button {
  margin-left: 3em;
  margin-bottom: 3em;
}
.popover {
  position: absolute;
  background: #fff;
  border: 1px solid #42b983;
  padding: 10px 20px;
  box-shadow: 0 6px 6px rgba(16, 16, 16, 0.04), 0 6px 6px rgba(0, 0, 0, 0.05);
  z-index: 999;
}
</style>
