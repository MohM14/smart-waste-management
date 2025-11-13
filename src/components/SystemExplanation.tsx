import { Radio, Cpu, Bell, Map, Shield, Activity } from 'lucide-react';

export default function SystemExplanation() {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">كيف يعمل النظام؟</h2>

      <div className="space-y-6">
        <div className="flex gap-4 items-start group">
          <div className="bg-gradient-to-br from-blue-500 to-cyan-500 p-4 rounded-xl shadow-md group-hover:scale-110 transition-transform">
            <Radio className="w-6 h-6 text-white" />
          </div>
          <div className="flex-1">
            <h3 className="font-bold text-lg text-gray-900 mb-2">١. المتحسسات الذكية</h3>
            <p className="text-gray-600 leading-relaxed">
              يتم تركيب متحسسات IoT في كل برميل نفايات لقياس درجة الحرارة، الرطوبة، الغازات (الميثان وCO2)، ومستوى الامتلاء.
              هذه المتحسسات تعمل على مدار الساعة وترسل البيانات لحظياً.
            </p>
          </div>
        </div>

        <div className="flex gap-4 items-start group">
          <div className="bg-gradient-to-br from-purple-500 to-pink-500 p-4 rounded-xl shadow-md group-hover:scale-110 transition-transform">
            <Cpu className="w-6 h-6 text-white" />
          </div>
          <div className="flex-1">
            <h3 className="font-bold text-lg text-gray-900 mb-2">٢. التحليل الذكي</h3>
            <p className="text-gray-600 leading-relaxed">
              يقوم النظام بتحليل البيانات باستخدام خوارزميات الذكاء الاصطناعي للكشف المبكر عن الأنماط غير الطبيعية
              التي قد تشير إلى وجود بكتيريا خطرة مثل E. coli، Salmonella، أو Staphylococcus.
            </p>
          </div>
        </div>

        <div className="flex gap-4 items-start group">
          <div className="bg-gradient-to-br from-red-500 to-rose-600 p-4 rounded-xl shadow-md group-hover:scale-110 transition-transform">
            <Bell className="w-6 h-6 text-white" />
          </div>
          <div className="flex-1">
            <h3 className="font-bold text-lg text-gray-900 mb-2">٣. التنبيهات الفورية</h3>
            <p className="text-gray-600 leading-relaxed">
              عند اكتشاف أي خطر، يرسل النظام تنبيهات فورية مصنفة حسب الشدة (تحذير، حرج، طارئ) إلى فرق الاستجابة
              السريعة عبر التطبيق، الرسائل النصية، والبريد الإلكتروني.
            </p>
          </div>
        </div>

        <div className="flex gap-4 items-start group">
          <div className="bg-gradient-to-br from-emerald-500 to-teal-500 p-4 rounded-xl shadow-md group-hover:scale-110 transition-transform">
            <Map className="w-6 h-6 text-white" />
          </div>
          <div className="flex-1">
            <h3 className="font-bold text-lg text-gray-900 mb-2">٤. التتبع اللحظي</h3>
            <p className="text-gray-600 leading-relaxed">
              خرائط تفاعلية توضح موقع كل برميل مع حالته الصحية باستخدام نظام الألوان: أخضر (طبيعي)،
              أصفر (تحذير)، أحمر (حرج). يمكن للمشرفين متابعة جميع البراميل في وقت واحد.
            </p>
          </div>
        </div>

        <div className="flex gap-4 items-start group">
          <div className="bg-gradient-to-br from-amber-500 to-orange-500 p-4 rounded-xl shadow-md group-hover:scale-110 transition-transform">
            <Activity className="w-6 h-6 text-white" />
          </div>
          <div className="flex-1">
            <h3 className="font-bold text-lg text-gray-900 mb-2">٥. الاستجابة السريعة</h3>
            <p className="text-gray-600 leading-relaxed">
              تمكن الفرق الصحية من الاستجابة الفورية بناءً على البيانات الدقيقة والموقع المحدد،
              مما يقلل زمن الاستجابة ويمنع انتشار الأوبئة.
            </p>
          </div>
        </div>

        <div className="flex gap-4 items-start group">
          <div className="bg-gradient-to-br from-slate-600 to-slate-700 p-4 rounded-xl shadow-md group-hover:scale-110 transition-transform">
            <Shield className="w-6 h-6 text-white" />
          </div>
          <div className="flex-1">
            <h3 className="font-bold text-lg text-gray-900 mb-2">٦. الأمان والخصوصية</h3>
            <p className="text-gray-600 leading-relaxed">
              جميع البيانات مشفرة ومحمية وفقاً لأعلى معايير الأمان. النظام يتوافق مع المعايير الصحية الدولية
              ويضمن خصوصية المعلومات الحساسة.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-8 bg-gradient-to-r from-emerald-50 to-teal-50 border-2 border-emerald-200 rounded-xl p-6">
        <h3 className="font-bold text-xl text-emerald-900 mb-3">الفوائد الرئيسية</h3>
        <ul className="space-y-2 text-gray-700">
          <li className="flex items-center gap-2">
            <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
            <span>الكشف المبكر عن الأوبئة قبل انتشارها</span>
          </li>
          <li className="flex items-center gap-2">
            <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
            <span>تقليل زمن الاستجابة من ساعات إلى دقائق</span>
          </li>
          <li className="flex items-center gap-2">
            <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
            <span>حماية الصحة العامة والبيئة</span>
          </li>
          <li className="flex items-center gap-2">
            <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
            <span>تحسين كفاءة إدارة النفايات الطبية</span>
          </li>
          <li className="flex items-center gap-2">
            <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
            <span>توفير بيانات دقيقة لاتخاذ القرارات</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
