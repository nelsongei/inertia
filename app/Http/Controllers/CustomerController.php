<?php

namespace App\Http\Controllers;

use App\Models\Country;
use App\Models\Currency;
use App\Models\Customer;
use App\Models\CustomerBilling;
use App\Models\CustomerShipping;
use ArielMejiaDev\LarapexCharts\LarapexChart;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Request;
use Inertia\Inertia;

class CustomerController extends Controller
{
    //
    public function index()
    {
        $customer = Customer::query()
            ->with('currency')
            ->get();
        return Inertia::render('Customers/Index', [
            'customers' => $customer
        ]);
    }

    public function create()
    {
        return Inertia::render('Customers/Create', [
            'countries' => Country::query()
                ->get(['id', 'name', 'code']),
            'currencies' => Currency::query()
                ->get(['id', 'name', 'code', 'symbol'])
        ]);
    }

    public function store()
    {
        $data = Request::validate([
            'name' => 'required',
            'country_id' => 'required',
            'state' => 'required',
            'city' => 'required',
            'phone' => 'required',
            'address_1' => 'required',
            'zip_code' => 'required',
            'firstname' => 'required',
            'lastname' => 'required',
            'email' => 'required',
            'bPhone' => 'required',
            'currency_id' => 'required',
            'website' => 'required',
            'sZip_code' => 'required',
            'sPhone' => 'required',
            'sAddress_1' => 'required',
            'sCity' => 'required',
            'sState' => 'required',
            'sCountry_id' => 'required',
            'sName' => 'required'
        ]);
        $customer = Customer::create(
            request()->validate([
                'firstname' => 'required',
                'lastname' => 'required',
                'email' => 'required',
                'phone' => 'required',
                'currency_id' => 'required',
                'website' => 'required'
            ])
        );
        $billing = new CustomerBilling();
        $billing->customer_id = $customer->id;
        $billing->name = request()->name;
        $billing->country_id = request()->country_id;
        $billing->state = request()->state;
        $billing->city = request()->city;
        $billing->phone = request()->bPhone;
        $billing->address_1 = request()->address_1;
        $billing->address_2 = request()->address_2;
        $billing->zip_code = request()->zip_code;
        $billing->save();
        //Shipping
        $shipping = new CustomerShipping();
        $shipping->customer_id = $customer->id;
        $shipping->name = request()->sName;
        $shipping->country_id = request()->sCountry_id;
        $shipping->state = request()->sState;
        $shipping->city = request()->sCity;
        $shipping->phone = request()->sPhone;
        $shipping->address_1 = request()->sAddress_1;
        $shipping->address_2 = request()->sAddress_2;
        $shipping->zip_code = request()->sZip_code;
        $shipping->save();
        return Redirect::route('customers')
            ->with(['toast' => ['message' => 'Successfully Added Customer']]);
    }
    public function edit(Customer $customer){
        $chart = (new LarapexChart())->areaChart()
            ->setTitle('Sales during 2021.')
            ->setSubtitle('Physical sales vs Digital sales.')
            ->addData('Physical sales', [40, 93, 35, 42, 18, 82])
            ->addData('Digital sales', [70, 29, 77, 28, 55, 45])
            ->setXAxis(['January', 'February', 'March', 'April', 'May', 'June'])
            ->toVue();
        $transaction = (new LarapexChart())->donutChart()
            ->setTitle('Top 3 scorers of the team.')
            ->setSubtitle('Season 2021.')
            ->addData([20, 24, 30])
            ->setLabels(['Player 7', 'Player 10', 'Player 9'])
            ->toVue();
        return Inertia::render('Customers/Edit',[
            'customer'=>$customer,
            'chart'=>$chart,
            'transaction'=>$transaction
        ]);
    }
}
