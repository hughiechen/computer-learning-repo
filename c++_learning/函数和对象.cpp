#include <iostream>;
#include <algorithm>;
#include <iterator>;
#include <iomanip>;
//#define BUFSIZE 20;
//const int BUFSIZE=20;

using namespace std;
//int result(int, int);
//int result(int, int,int);
//
//const int k = 2;
//struct Point {
//    int x, y;
// };

//int main() {
    /* 
    int z(0), b(50);
    Point a;
    int g, h, i;
    cout <<"输入两个整数：";
    cin >> a.x >> a.y;
    z = (a.x + a.y) * k;
    z = result(z, b);
    cout << "计算结果如下：" << endl;
    cout << "((" << a.x << "+" << a.y
        << ")*" << k << ")+" << b
        << "=" << z
        << endl;
    cout << "输入三个整数：";

    cin >> g >> h >> i;

    cout << "三数相加:" << endl
         << result(g, h,i);
    */

    /* //动态分配内存
    double* p;
    p = new double[3];
    for (int i = 0; i < 3; i++) {
        cin >> *(p + i);
    }
    for(int i = 0; i < 3; i++) {
        cout << *(p + i) << "->";
    }*/

    //引用赋值
    //int x = 55;
    //int& a = x;
    //int& c = a;
    //cout << "x=" << x << "," << "&a=" << &a << ",c=" << c << endl;
    //c = 1;
    //cout << "x=" << x << "," << "&a=" << &a << ",c=" << c << endl;


    //间接引用数组值
    //int j[2] = { 0, 1 };
    //int& g = j;
    //for (int i = 0; i < 2; i++)
    //    cout << g[i] << endl;

   /* const int y = 20;
    const int* p=y;
    int x = 34;
    const int* pl = &x;
    cout << pl << endl;*/


//    return 0;
//
//}

//int result(int a, int b) {
//    return a + b;
//}
//int result(int a, int b,int c) {
//    return a + b+c;
//}

//数组升幂、复制、逆向、输出
//void main() {
    //double a[] = { 1.2,1.3,1.4,1.5,1.6 }, b[5];
    ////正向输出
    //copy(a, a + 4, ostream_iterator<double>(cout, "<<<"));
    //cout << endl;
    ////逆向输出
    //reverse_copy(a, a + 4, ostream_iterator<double>(cout, ">>"));
    //copy(a, a + 4, b);
    //copy(b, b + 4, ostream_iterator<double>(cout, "<<"));
    //cout << endl;
    //sort(a, a + 4);
    //copy(a, a + 4, ostream_iterator<double>(cout, ">>"));
    //cout << endl;
    //reverse_copy(a, a + 4, b);
    //copy(b, b + 4, ostream_iterator<double>(cout, "<<"));
    //cout << endl;
    //double* x = find(a, a + 5, 1.5);
    //if (x == a + 4)cout << "have no value";
    //else cout << "value is"<<*x<<endl;
    //x = find(b, b + 4, 1.2);
    //if (x == b + 4)cout << "none";
    //else cout << "point is"<< x <<endl;

//    char a[] = "whycanthishappen", b[15];
//    reverse(a, a + 15);
//    copy(a, a + 15, ostream_iterator<char>(cout, "->"));
//    cout << endl;
//    copy(a, a + 10, b);
//    sort(a, a + 10);
//    cout << a << endl;
//    cout << b << endl;
//    reverse_copy(a, a + 10, b);
//    cout << b << endl;
//    reverse(b + 2, b + 10);
//    copy(b + 2, b + 10, ostream_iterator<char>(cout, "<-"));
//    cout << endl;
//
//}
//使用setw设置输出宽度
void main() {
    int a=1, b = 1001;
    const double PI = 3.1415926;
    cout << a << setw(6) << b << endl;
    cout << setw(6) << a << b << endl;
    cout << PI << endl
        << setprecision(0) << PI << endl
        << setprecision(4) << PI << endl;
    int c = 100;
    cout << "dec" << dec << b << endl
        << "hex" << hex << b << endl
        << "Oct" << oct << b << endl;
    cout << c << endl
    << "input:" << endl;
    cin>>c;
    cout << dec << setiosflags(ios_base::showpos) << b << endl;
    cin >>c;
    cout << c << endl;
    cout << resetiosflags(ios_base::showpos);
    cout << b << endl;
    cout << setfill('-')
        << setw(0) << 15 << endl;
    cout << setiosflags(ios_base::right)
        << setw(5) << 3
        << setw(5) << 2
        << setw(5) << 1 << endl;
    cout << resetiosflags(ios_base::right);
    cout << setiosflags(ios_base::left)
        << setw(5) << 3
        << setw(5) << 2
        << setw(5) << 1 << endl;
}