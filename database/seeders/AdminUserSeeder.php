<?php

namespace Database\Seeders;


use App\Models\User;
use Illuminate\Database\Seeder;

class AdminUserSeeder extends Seeder
{
    public function run()
    {
        User::create([
            'name' => 'Adrian',
            'email' => 'adriank@gmx.de',
            'password' => bcrypt('Jebise81'),
            'email_verified_at' => now(),
            'is_admin' => true,
        ]);
    }
}
