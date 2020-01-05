<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $user = new App\User();
        $user->name = "Thiri Win";
        $user->email = "thiriwin@gmail.com";
        $user->password = bcrypt('thiriwin');
        $user->save();

        // $this->call(UsersTableSeeder::class);
        $this->call(BlogsTableSeeder::class);
    }
}
