<?php
/**
 *   Stake iGaming platform
 *   ----------------------
 *   Job.php
 * 
 *   @copyright  Copyright (c) FinancialPlugins, All rights reserved
 *   @author     FinancialPlugins <info@financialplugins.com>
 *   @see        https://financialplugins.com
*/

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Job extends Model
{
    use DefaultTimestampsAgoAttributes;
    use HasFactory;

    protected $casts = [
        'payload' => 'collection',
        'available_at' => 'datetime',
        'reserved_at' => 'datetime',
    ];

    protected $appends = ['created_ago'];
}
