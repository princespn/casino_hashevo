<template>
  <v-container class="fill-height" fluid>
    <v-layout align-center>
      <v-flex text-center>
        <h1 class="text-h5 text-sm-h4 text-md-h3 primary--text">
          {{ $t('Error {0}', [503]) }}
        </h1>
        <p class="my-5">
          {{ $t('Our website is down for maintenance') }}
        </p>
        <v-btn :to="{ name: 'home' }" replace outlined color="primary">
          {{ $t('Home') }}
        </v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>
