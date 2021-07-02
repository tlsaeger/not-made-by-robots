<template>
  <section class="fourth_section">
    <h2 class="section-title" id="tools">
      Tools
    </h2>
    <div class="filter">
      <div
        class="filter-element code tag"
        :class="[filterValue]"
        @click="filtering($event, 'code')"
        v-for="filterValue in filterValues.code"
        :key="filterValue"
      >
        {{ filterValue }}
      </div>
      <div
        class="filter-element level tag"
        :class="[filterValue]"
        @click="filtering($event, 'level')"
        v-for="filterValue in filterValues.level"
        :key="filterValue"
      >
        {{ filterValue }}
      </div>
      <div
        class="filter-element preis tag"
        :class="[filterValue]"
        @click="filtering($event, 'preis')"
        v-for="filterValue in filterValues.preis"
        :key="filterValue"
      >
        {{ filterValue }}
      </div>
    </div>
    <div class="text-block-wrapper text-block-wrapper-mini">
      <transition
        name="fade"
        v-for="ressource in filteredArray"
        :key="ressource.slug"
      >
        <a :href="ressource.link" target="_blank" class="card card-mini">
          <nuxt-img
            class="preview-image preview-image-mini"
            :src="ressource.image"
          />
          <div class="desc-text-wrapper">
            <h3>{{ ressource.title }}</h3>
            <p class="body-text">{{ ressource.description }} ↗︎</p>
            <div class="tag-container">
              <div
                v-for="tag in ressource.tags"
                :key="tag"
                class="tag"
                :class="tag"
              >
                {{ tag }}
              </div>
            </div>
          </div>
        </a>
      </transition>
    </div>
  </section>
</template>
<script>
import filterValues from "@/static/filterValues";
export default {
  props: {
    ressourcen: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      filterValues: filterValues.filterValues,
      filteredArray: []
    };
  },
  methods: {
    filtering(e, group) {
      this.filteredArray = [];
      let groupList = document.getElementsByClassName(group);
      if (e.currentTarget.classList.contains("active")) {
        for (let i = 0; i < groupList.length; i++) {
          groupList[i].classList.remove("active");
        }
      } else {
        for (let i = 0; i < groupList.length; i++) {
          groupList[i].classList.remove("active");
          e.currentTarget.classList.add("active");
        }
      }
      //TODO make filter apply to all values
      let active = document.getElementsByClassName("active");
      for (let i = 0; i < this.ressourcen.length; i++) {
        for (let j = 0; j < active.length; j++) {
          for (let k = 0; k < this.ressourcen[i].tags.length; k++) {
            if (
              this.ressourcen[i].tags[k] === active[j].innerText &&
              !this.filteredArray.includes(this.ressourcen[i])
            ) {
              this.filteredArray.push(this.ressourcen[i]);
            }
          }
          //   for (let i = 0; i < this.ressourcen.length; i++) {
          //     for(let j = 0; j < this.ressourcen[i].tags.length; j++)
          //     if (filterValue === this.ressourcen[i].tags[j] &&! this.filterActive) {
          //       this.filteredArray.push(this.ressourcen[i]);
          //       this.addClass('active');
          //     }
          //   }
        }
      }
    }
  }
};
</script>
<style scoped></style>
