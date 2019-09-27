float N = 1000.0;
float bar = 10000.0;

vec2 img_multi(vec2 a, vec2 b){
    return vec2(a.x*b.x-a.y*b.y,a.x*b.y+a.y*b.x);
}

void mainImage( out vec4 fragColor, in vec2 fragCoord )
{
    
    // Normalized pixel coordinates (from 0 to 1)
    vec2 uv = vec2(fragCoord.x/iResolution.x, fragCoord.y/iResolution.x);
    
    uv=5.0*uv+vec2(-2.0,-2.0);
        
    float loop_count = 0.0;
    vec2 result = vec2(0,0);
    //Mandelbrot
    for( int i = 0 ; i < int(N) ; i++)
    {
    	result=img_multi(result,result)+uv;
        if(length(result) > bar){
            break;
        }
        loop_count++;
    }
    
    if(loop_count >= N){
        
        fragColor = vec4(0.7,0.4,0.5,1.0);
    }
    else{
    	// Output to screen
        float bgColor = loop_count/N*50.0;
    	fragColor = vec4(bgColor,bgColor, 0.0,1.0);
    }
}
