<template>
  <div class="app">
    <JobList :jobs="jobs" />
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue';
import JobList from './components/JobList.vue';
import { Job } from './types/Job';

export default defineComponent({
  name: 'App',
  components: {
    JobList,
  },
  setup () {
    // const state  = reactive({
    //   name: 'Link',
    //   age: 25 as number | string
    // })

    // return {
    //   ...toRefs(state)
    // }

    // const name = ref('Link')
    // const age = ref<number | string>(25)

    // return {
    //   name,
    //   age,
    // }
    const jobs = ref <Job[]>([
      {
        title: 'Title',
        location: 'Booba',
        salary: 123,
        id: '1'
      },
      {
        title: 'Amogus',
        location: 'mogu mogu',
        salary: 321,
        id: '2'
      },
    ])

    return {
      jobs
    }
  },
});
</script>

<style>

</style>
