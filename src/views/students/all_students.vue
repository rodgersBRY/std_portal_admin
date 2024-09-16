<template>
    <div id="all-students-page">
        
        <main>
          <section class="content">
          <!-- error dialog -->
          <error-dialog :display="error" @close-dialog="resetError" :error-text="error"></error-dialog>
  
          <v-card flat class="pa-1">
            <v-card-title>
                <h2>Students</h2>
                <v-spacer />
                <v-text-field
                v-model="search"
                color="brown"
                append-icon="mdi-magnify"
                label="Search"
                single-line
                hide-details
                >
                </v-text-field>
            </v-card-title>
            <h2 class="my-6 ml-3 grey--text">
                Students In Attendance:
                <span class="blue--text">
                {{ attendanceCount }}
                </span>
            </h2>
            <v-data-table
                :item-key="students.code"
                :headers="headers"
                :items="students"
                :search="search"
                :loading="isLoading"
                loading-text="Loading... Please wait"
            >
                <template v-slot:top>
                <v-toolbar flat>
                    <v-spacer />
    
                    <user-dialog :userType="['student']" />
                    
                    <v-dialog v-model="dialogDelete" width="400px">
                    <v-card width="100%" class="py-9">
                        <v-card-title class="text-h5 justify-center"
                        >Are you sure you want to delete?</v-card-title
                        >
                        <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="grey darken-1" text @click="closeDelete"
                            >Cancel</v-btn
                        >
                        <v-btn color="red darken-1" text @click="confirmDelete"
                            >OK</v-btn
                        >
                        <v-spacer></v-spacer>
                        </v-card-actions>
                    </v-card>
                    </v-dialog>
                </v-toolbar>
                </template>
    
                <template v-slot:item.name="{ item }">
                <div
                    style="
                    cursor: pointer;
                    height: 100%;
                    width: 100%;
                    display: flex;
                    align-items: center;"
                    @click="$router.push(`/student-details/${item._id}`)"
                >
                    {{ item.name }}
                </div>
                </template>
                <template v-slot:item.fee_balance="{ item }">
                <p :class="[item.fee_balance > 0 ? 'warning--text' : '']">
                    {{ item.fee_balance | currencyFormatter }}
                </p>
                </template>
                <template v-slot:item.checkedIn="{ item }">
                <div v-if="item.checkedIn">In class</div>
                <div v-else class="grey--text">--</div>
                </template>
                <template v-if="user.role == 'admin'" v-slot:item.actions="{ item }">
                <v-icon
                    small
                    class="mr-2"
                    color="red"
                    @click="removeStudent(item)"
                    >mdi-delete</v-icon
                >
                </template>
            </v-data-table>
            </v-card>
          </section>
        </main>
    </div>
</template>