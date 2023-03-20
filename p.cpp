#include <iostream>
using namespace std;

int main()
{
    int seller, retail, profit, margin;

    cout << "enter seller:";
    cin >> seller;
    cout << "enter retail:";
    cin >> retail;
    cout << "enter profit:";
    cin >> profit;

    margin = profit / retail * 100;

    cout << "enter margin:<<margin";

    return 0;
}
