HTML5 Sürükle ve Bırak API Olayları, bir istifadəçinin obyekti çəkmə və buraxma əməliyyatları zamanı baş verən müxtəlif mərhələləri və interaksiyaları təsvir edir. İşə düşən hər bir hadisənin nə iş gördüyünü sadə şəkildə izah edirik:

1. **dragstart**: Bu hadisə, bir elementin sürükləmə əməliyyatı başladığında icra olunur. Məsələn, bir obyekti sürükləməyə başladığınızda işlənir. Əsasən, sürüklənən elementin məlumatlarını daşımaq üçün istifadə edilir.

2. **drag**: Sürükləmə əməliyyatı zamanı obyekt sürüklənərək davam etdikdə davamlı olaraq icra olunur. Bu hadisəni istifadə edərək sürükləmə əməliyyatı zamanı müxtəlif görsel məlumatlar təmin edə bilərsiniz.

3. **dragenter**: Sürükləmə əməliyyatı zamanı bir element başqa bir elementin üstünə gəldikdə icra olunur. Bu elementin sürüklənən elementin qəbul edilə bilən bir məqsəd olduğunu göstərmək üçün istifadə edilir.

4. **dragover**: Sürükləmə əməliyyatı zamanı bir elementin üzərində olduğunuz zaman davamlı olaraq icra olunur. Əsasən sürükləmə əməliyyatının davam etməsi üçün istifadə edilir və bu elementin sürüklənən elementin düşə biləcəyi bir məqsəd olduğunu göstərir.

5. **dragleave**: Bir elementin sürükləmə əməliyyatı zamanı üzərindən çıxdığı zaman icra olunur. Bu hadisə, elementin sürüklənən elementin üzərindən çıxdığını göstərmək üçün istifadə edilir.

6. **drop**: Bir elementin sürükləmə əməliyyatı zamanı sürüklənən elementin üzərinə buraxılması zamanı icra olunur. Sürüklənən elementi qəbul edən və işləyən elementi təyin edən əsas hadisədir.

7. **dragend**: Sürükləmə əməliyyatı başa çatdığında və ya ləğv edildiyində icra olunur. Bu hadisə, sürükləmə əməliyyatının bitdiyini göstərmək və təmizlik əməliyyatlarını icra etmək üçün istifadə edilir.

Bu hadisələr, obyektləri bir yerə sürükləmə və buraxmağa kömək edir və veb tətbiqlərində sürüklə və buraxma əməliyyatlarının tətbiqini asanlaşdırır, interaktiv istifadəçi təcrübələrini təkmilləşdirmək üçün istifadə edilə bilər.