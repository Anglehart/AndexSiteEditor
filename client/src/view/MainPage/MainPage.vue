<template>
    <div class="mainpage" :class="{hidemain: isCardShow}">
      <h1>Редактор магазина</h1>
      <!--    <el-row>-->
      <!--      <p>Скрытие изображений реализовано через Socket.io</p>-->
      <!--      <el-switch-->
      <!--          @change="changeImageStatus"-->
      <!--          :value="getImagesStatus"-->
      <!--          active-text="Показать фото"-->
      <!--          inactive-text="Скрыть фото">-->
      <!--      </el-switch>-->
      <!--    </el-row>-->
      <!--    <el-row type="flex" justify="center">-->
      <!--      <el-col :span="10">-->
      <!--        <el-input type="textarea" v-model="urls" rows="10"></el-input>-->
      <!--      </el-col>-->
      <!--    </el-row>-->
      <!--     <el-row type="flex" justify="center">-->
      <!--      <el-col>-->
      <!--        <el-button type="primary" rows="10" @click="handleGetParser">-->
      <!--          Парсинг-->
      <!--        </el-button>-->
      <!--      </el-col>-->
      <!--    </el-row>-->
      <!--    <el-row>-->
      <!--      <ul v-for="(item, idx) in parserResult" :key="idx">-->
      <!--        <li>{{item}}</li>-->
      <!--      </ul>-->
      <!--    </el-row>-->
      <el-row justify="center" >
        <el-card v-for="(item, idx) in productsList" :key="idx" :style="{ margin: '10px' }">
          <template #header>
            <div class="card-header">
              <p>{{item.name}}</p>
              <el-button class="button" type="primary" @click="showCardHandler(item)">Показать карточку</el-button>
            </div>
          </template>
          <img class="image" alt="image" :src="'https://andexgeo.ru/components/com_jshopping/files/img_products/'+item.image">
        </el-card>
      </el-row>
      <el-row style="padding-top: 15px" justify="center">
        <el-button @click="onShowMore" type="primary">Показать еще 10</el-button>
      </el-row>
    </div>
    <CardPage :card="currentCard" :hide="isCardShow" @back="returnHandler"/>
</template>

<script src="./mainpage.ts"></script>
<style lang="css" src="./mainpage.css"></style>
