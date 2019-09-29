precision mediump float;

float eps = 0.001;

bool isEqual(float a, float b){
    if(abs(a-b) < eps){
        return true;
    }
    return false;
}

// My simple ray casting/tracing algorithm
vec2 img_multi(vec2 a, vec2 b){
    return vec2(a.x*b.x-a.y*b.y,a.x*b.y+a.y*b.x);
}

struct Sphere3{
	vec3 c;  // Center 
	float r;  // Radius
};
    
struct Ray3{  // all points in the line x=p+dt where t>=0
    vec3 p;  // Starting point
    vec3 d;
};

struct quad_solution{
    int s_count;  // 0 -- No solution; 1 -- 1 solution; 2 -- 2 solutions; 3 -- any number is good;
    float s[2]; // Solutions, at most 2 solutions.
};

quad_solution solve_quad(vec3 eq){ // eq is eq.x x^2 + eq.y x + eq.z =0
	quad_solution ret_value;
    
    if(isEqual(eq.x,0.0)){ // Simple equation
        if(isEqual(eq.y, 0.0) && isEqual(eq.z, 0.0)){
            ret_value.s_count = 3;
        } else if( isEqual(eq.y, 0.0) && isEqual(eq.z, 0.0)){
            ret_value.s_count = 0;
        } else{
            ret_value.s_count = 1;
            ret_value.s[0] = eq.z/eq.y;
        }
    } else{  // Quad equation
        float det = eq.y * eq.y - 4.0*eq.x*eq.z;
        if(isEqual(det, 0.0) ){
            ret_value.s_count = 1;
            ret_value.s[0] = - eq.y/(2.0*eq.x);
        }else{
            ret_value.s_count = 2;
            float solution_1 = (-eq.y + sqrt(det))/(2.0*eq.x);
            float solution_2 = (-eq.y - sqrt(det))/(2.0*eq.x);
            
            ret_value.s[0] = min(solution_1, solution_2);
            ret_value.s[1] = max(solution_1, solution_2);
        }
    }
    
    return ret_value;
}

struct intersect_result{
    int result; // 0 -- no intersect, 1 -- one intersect, 2 -- two intersects
    vec3 points[2];
};
    
intersect_result intersect_Sphere3_Ray3(Sphere3 s, Ray3 r){
    vec3 dSL = r.p - s.c;
    vec3 eq = vec3(dot(r.d,r.d), 2.0*dot(r.d, dSL), dot(dSL, dSL));
    
    quad_solution solution = solve_quad(eq);
    intersect_result res;
    
    if(solution.s_count == 1){
        float t = solution.s[0];
        if(isEqual(t, 0.0)){
            res.result = 0;
        } else {
            res.result = 1;
            res.points[0] = r.p + t*r.d;
        }
    } else if(solution.s_count == 2 ){
        if(solution.s[0] >= 0.0){
            res.result = 2;
            res.points[0] = r.p + solution.s[0]*r.d;
            res.points[1] = r.p + solution.s[1]*r.d;
        }else if(solution.s[1] >= 0.0){
            res.result = 1;
            res.points[0] = r.p + solution.s[1] * r.d;
        } else {
            res.result = 0;
        }
    }
    
    return res;
}

void mainImage( out vec4 fragColor, in vec2 fragCoord )
{
    // Normalized pixel coordinates (from 0 to 1)
    vec3 eye = vec3(0.0,0.0,0.0);
    float z = 1.0;
    Ray3 eye_ray;
    eye_
 
    fragColor = vec4(0.0,0.0,0.0,1.0);
}
