<template>
  <section class="fourth_section section">
    <div class="filter">
      <div
        class="filter-element kind tag"
        :class="[filterValue]"
        @click="filtering($event, 'kind')"
        v-for="filterValue in filterValues.kind"
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
    <!-- //TODO Add animation -->
    <transition-group tag="div" name="scale" mode="in-out" class="text-block-wrapper text-block-wrapper-mini ressourcen-wrapper">
        <div v-if="noContent" class="allfilters" key="noContent">Keine Inhalte mehr verfügbar. <br> Bitte entferne ein paar Filter!</div>

        <a v-for="ressource in filteredArray" :href="ressource.link" :key="ressource.slug" class="card card-mini shadow shadow-hover" target="_blank" >
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
    </transition-group>
  </section>
</template>
<script>
import filterValues from "@/static/filterValues";
export default {
    transition: 'scale',
  props: {
    ressourcen: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      filterValues: filterValues.filterValues,
      filteredArray: this.ressourcen,
      noContent: false,
    };
  },
  beforeMount(){
  let array = this.filteredArray;
   for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }

  return array;
  },
  methods: {
    filtering(e, group) {
      let activeValues = [];
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

      const isContainedIn = (a, b) => {
        for (const v of new Set(a)) {
          if (
            !b.some(e => e === v) ||
            a.filter(e => e === v).length > b.filter(e => e === v).length
          )
            return false;
        }
        return true;
      };

      let active = document.getElementsByClassName("active");
      for (let i = 0; i < active.length; i++) {
        activeValues.push(active[i].innerText.toLowerCase());
      }
      for (let i = 0; i < this.ressourcen.length; i++) {
        if (isContainedIn(activeValues, this.ressourcen[i].tags)) {
          this.filteredArray.push(this.ressourcen[i]);
        }
      }
            if(this.filteredArray.length === 0){
          this.noContent = true;
      } 
      else{
          this.noContent = false;
      }
    }
  }
};
</script>
<style scoped>

.scale-enter-active {
  animation: fade-in 0.5s;
}
.scale-leave-active {
  animation: fade-in 0.5s reverse;
}
@keyframes fade-in {
  0% {
    opacity: 0;
    transform: scaleY(0);
  }
  100% {
    opacity: 1;
    transform: scaleY(1);
  }
}
</style>
