<template>
  <v-card
    max-width="100%"
    class="mx-auto fill-height"
  >
    <v-container>
      <v-row dense>
        <v-col
          v-for="(item, i) in items"
          :key="i"
          cols="12"
          md="6"
          lg="4"
          xl="3"
        >
          <v-card
            :color="item.color"
            dark
          >
            <div class="d-flex flex-no-wrap justify-space-between">
              <div>
                <v-card-title
                  class="text-h5"
                  v-text="item.title"
                ></v-card-title>

                <v-card-subtitle v-text="item.artist"></v-card-subtitle>

                <v-card-actions>
                  <v-btn
                    v-if="item.artist === 'Ellie Goulding'"
                    class="ml-2 mt-3"
                    fab
                    icon
                    height="40px"
                    right
                    width="40px"
                  >
                    <v-icon>mdi-play</v-icon>
                  </v-btn>

                  <v-btn
                    v-else
                    class="ml-2 mt-5"
                    outlined
                    rounded
                    small
                  >
                    START RADIO
                  </v-btn>
                </v-card-actions>
              </div>

              <v-avatar
                class="ma-3"
                width="135"
                height="170"

                tile
              >
                <v-img
                  :src="item.src"
                  contain
                >
                  <template v-slot:placeholder>
                    <v-row
                      class="fill-height ma-0"
                      align="center"
                      justify="center"
                    >
                      <v-progress-circular
                        indeterminate
                        color="grey lighten-5"
                      ></v-progress-circular>
                    </v-row>
                  </template>
                </v-img>
              </v-avatar>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
export default {
  data () {
    return {
      items: [
        {
          color: '#1F7087',
          src: 'http://image.kyobobook.co.kr/images/book/xlarge/789/x9791188612789.jpg',
          title: 'Supermodel',
          artist: 'Foster the People'
        },
        {
          color: '#1F7087',
          src: 'http://image.kyobobook.co.kr/images/book/xlarge/789/x9791188612789.jpg',
          title: 'Supermodel',
          artist: 'Foster the People'
        },
        {
          color: '#1F7087',
          src: 'http://image.kyobobook.co.kr/images/book/xlarge/789/x9791188612789.jpg',
          title: 'Supermodel',
          artist: 'Foster the People'
        },
        {
          color: '#1F7087',
          src: 'http://image.kyobobook.co.kr/images/book/xlarge/789/x9791188612789.jpg',
          title: 'Supermodel',
          artist: 'Foster the People'
        },
        {
          color: '#1F7087',
          src: 'http://image.kyobobook.co.kr/images/book/xlarge/789/x9791188612789.jpg',
          title: 'Supermodel',
          artist: 'Foster the People'
        },
        {
          color: '#1F7087',
          src: 'http://image.kyobobook.co.kr/images/book/xlarge/789/x9791188612789.jpg',
          title: 'Supermodel',
          artist: 'Foster the People'
        },
        {
          color: '#1F7087',
          src: 'http://image.kyobobook.co.kr/images/book/xlarge/789/x9791188612789.jpg',
          title: 'Supermodel',
          artist: 'Foster the People'
        },
        {
          color: '#1F7087',
          src: 'http://image.kyobobook.co.kr/images/book/xlarge/789/x9791188612789.jpg',
          title: 'Supermodel',
          artist: 'Foster the People'
        },
        {
          color: '#1F7087',
          src: 'http://image.kyobobook.co.kr/images/book/xlarge/789/x9791188612789.jpg',
          title: 'Supermodel',
          artist: 'Foster the People'
        },
        {
          color: '#1F7087',
          src: 'http://image.kyobobook.co.kr/images/book/xlarge/789/x9791188612789.jpg',
          title: 'Supermodel',
          artist: 'Foster the People'
        },
        {
          color: '#1F7087',
          src: 'http://image.kyobobook.co.kr/images/book/xlarge/789/x9791188612789.jpg',
          title: 'Supermodel',
          artist: 'Foster the People'
        },
        {
          color: '#952175',
          src: 'https://cdn.vuetifyjs.com/images/cards/halcyon.png',
          title: 'Halcyon Days',
          artist: 'Ellie Goulding'
        }
      ]
    }
  }
}
</script>

<style>

</style>
