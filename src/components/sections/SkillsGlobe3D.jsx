"use client";

import React, { useRef, useEffect, useState, useMemo, useCallback } from 'react';
// GSAP রিমুভ করা হয়েছে। এখন সব Raw JS দিয়ে চলবে।
import {
  HiOutlineGlobeAsiaAustralia,
  HiOutlineArrowPath,
  HiOutlinePlay,
  HiOutlinePause,
  HiOutlineMagnifyingGlassPlus,
  HiOutlineMagnifyingGlassMinus,
  HiOutlineSparkles,
  HiOutlineMapPin,
  HiOutlineBolt,
  HiOutlineCube
} from 'react-icons/hi2';
import { TbCompass } from 'react-icons/tb';

function generateEarthContinents() {
  const points = [];
  const landmassRegions = [
    { minLat: 25, maxLat: 68, minLon: -140, maxLon: -55, count: 180 },
    { minLat: 8, maxLat: 24, minLon: -105, maxLon: -60, count: 40 },
    { minLat: -55, maxLat: 12, minLon: -80, maxLon: -35, count: 150 },
    { minLat: 36, maxLat: 65, minLon: -10, maxLon: 45, count: 160 },
    { minLat: 50, maxLat: 70, minLon: -10, maxLon: 30, count: 60 },
    { minLat: -35, maxLat: 37, minLon: -17, maxLon: 51, count: 190 },
    { minLat: 15, maxLat: 40, minLon: 35, maxLon: 60, count: 70 },
    { minLat: 6, maxLat: 36, minLon: 68, maxLon: 95, count: 140 },
    { minLat: 20, maxLat: 55, minLon: 95, maxLon: 145, count: 180 },
    { minLat: -10, maxLat: 20, minLon: 95, maxLon: 140, count: 100 },
    { minLat: -45, maxLat: -10, minLon: 112, maxLon: 178, count: 120 },
    { minLat: 50, maxLat: 72, minLon: 45, maxLon: 175, count: 160 },
    { minLat: -82, maxLat: -65, minLon: -180, maxLon: 180, count: 90 },
  ];

  let seed = 42;
  const pseudoRandom = () => {
    seed = (seed * 9301 + 49297) % 233280;
    return seed / 233280;
  };

  landmassRegions.forEach((region) => {
    for (let i = 0; i < region.count; i++) {
      const lat = region.minLat + pseudoRandom() * (region.maxLat - region.minLat);
      const lon = region.minLon + pseudoRandom() * (region.maxLon - region.minLon);

      const phi = (90 - lat) * (Math.PI / 180);
      const theta = (lon + 180) * (Math.PI / 180);

      const x = -(Math.sin(phi) * Math.cos(theta));
      const z = Math.sin(phi) * Math.sin(theta);
      const y = Math.cos(phi);

      points.push({ x, y, z, lat, lon, brightness: 0.4 + pseudoRandom() * 0.6 });
    }
  });

  return points;
}

// Raw JS Math for smooth animations (Linear Interpolation)
const lerp = (start, end, factor) => start + (end - start) * factor;

export default function SkillsGlobe3D({
  skills,
  selectedCategory,
  onSelectSkill,
  hoveredSkill,
  skillIconMap = {},
}) {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);

  // শুধু ডেস্কটপে রেন্ডার করার জন্য স্টেট
  const [isDesktop, setIsDesktop] = useState(true);
  
  const [isAutoRotating, setIsAutoRotating] = useState(true);
  const [activeSkill, setActiveSkill] = useState(hoveredSkill);
  const [currentCategory, setCurrentCategory] = useState(selectedCategory || 'all');

  const categories = [
    { id: 'all', label: 'All Stack' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'database', label: 'Database' },
    { id: 'tools', label: 'DevOps & Tools' },
  ];

  // GSAP এর বদলে কাস্টম রোটেশন এবং জুম ট্র্যাকিং
  const rotationRef = useRef({
    rx: 0.35, ry: 2.1, rz: 0,
    zoom: 1.0, zoomTarget: 1.0,
    isDragging: false, lastMouseX: 0, lastMouseY: 0,
    dragVelocityX: 0, dragVelocityY: 0,
    isFlying: false, targetRx: 0.35, targetRy: 2.1
  });

  const activeSkillRef = useRef(activeSkill);
  const selectedCategoryRef = useRef(selectedCategory);
  const isAutoRotatingRef = useRef(isAutoRotating);

  useEffect(() => { activeSkillRef.current = activeSkill; }, [activeSkill]);
  useEffect(() => { selectedCategoryRef.current = selectedCategory; }, [selectedCategory]);
  useEffect(() => { isAutoRotatingRef.current = isAutoRotating; }, [isAutoRotating]);

  // উইন্ডো সাইজ চেক করা (মোবাইল নাকি ডেস্কটপ)
  useEffect(() => {
    const handleResizeCheck = () => setIsDesktop(window.innerWidth >= 1024);
    handleResizeCheck(); // Initial check
    window.addEventListener('resize', handleResizeCheck);
    return () => window.removeEventListener('resize', handleResizeCheck);
  }, []);

  const continentPoints = useMemo(() => generateEarthContinents(), []);

  const skill3DPoints = useMemo(() => {
    const total = skills.length;
    const phiAngle = Math.PI * (3 - Math.sqrt(5));

    return skills.map((skill, index) => {
      const y = 1 - (index / (total - 1 || 1)) * 1.8 - 0.1;
      const radiusAtY = Math.sqrt(Math.max(0, 1 - y * y));
      const theta = phiAngle * index * 1.618;

      const x = Math.cos(theta) * radiusAtY;
      const z = Math.sin(theta) * radiusAtY;
      const lat = Math.asin(y) * (180 / Math.PI);
      const lon = (Math.atan2(z, x) * (180 / Math.PI));

      return { skill, x, y, z, lat, lon };
    });
  }, [skills]);

  const homeBaseLocation = useMemo(() => {
    const lat = 22.8456;
    const lon = 89.5403;
    const phi = (90 - lat) * (Math.PI / 180);
    const theta = (lon + 180) * (Math.PI / 180);
    return { name: 'Rajshahi, BD', x: -(Math.sin(phi) * Math.cos(theta)), y: Math.cos(phi), z: Math.sin(phi) * Math.sin(theta), lat, lon };
  }, []);

  useEffect(() => {
    if (hoveredSkill) setActiveSkill(hoveredSkill);
  }, [hoveredSkill]);

  // GSAP ছাড়াই Raw JS Smooth Flying Method
  const flyToTarget = useCallback((targetLat, targetLon) => {
    setIsAutoRotating(false);
    const targetRy = -((targetLon + 90) * (Math.PI / 180));
    const targetRx = (targetLat * (Math.PI / 180)) * 0.6;

    rotationRef.current.isFlying = true;
    rotationRef.current.targetRx = targetRx;
    rotationRef.current.targetRy = targetRy;
  }, []);

  const handleFlyHome = () => flyToTarget(homeBaseLocation.lat, homeBaseLocation.lon);

  const handleSelectSkillNode = (skill) => {
    setActiveSkill(skill);
    onSelectSkill(skill);
    const point = skill3DPoints.find((p) => p.skill.name === skill.name);
    if (point && isDesktop) flyToTarget(point.lat, point.lon);
  };

  useEffect(() => {
    // যদি মোবাইল হয়, তাহলে 3D Canvas রেন্ডার বা লুপ শুরুই হবে না (Full Speed Boost)
    if (!isDesktop) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;

    let animationFrameId = null;
    let isLoopRunning = false;
    let arcPulsePhase = 0;
    let lastFrameTime = 0;
    const FRAME_INTERVAL = 1000 / 30;

    const isVisibleRef = { current: true };

    const stopLoop = () => {
      isLoopRunning = false;
      if (animationFrameId !== null) {
        cancelAnimationFrame(animationFrameId);
        animationFrameId = null;
      }
    };

    const startLoop = () => {
      if (isLoopRunning) return;
      isLoopRunning = true;
      lastFrameTime = 0;
      animationFrameId = requestAnimationFrame(render);
    };

    const visibilityObserver = new IntersectionObserver(
      ([entry]) => {
        isVisibleRef.current = entry.isIntersecting;
        if (entry.isIntersecting) startLoop();
        else stopLoop();
      },
      { threshold: 0.01 }
    );
    if (containerRef.current) visibilityObserver.observe(containerRef.current);

    const handleResize = () => {
      if (!containerRef.current || !canvas) return;
      const rect = containerRef.current.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
    };

    handleResize();
    const resizeObserver = new ResizeObserver(handleResize);
    if (containerRef.current) resizeObserver.observe(containerRef.current);

    let cachedOuterGlow = null;
    let cachedOceanShading = null;
    let cachedHalo = null;
    let cachedHaloSelect = null;
    let lastRenderState = "";

    const render = (timestamp = 0) => {
      if (!isLoopRunning || !canvas || !ctx) return;
      animationFrameId = requestAnimationFrame(render);

      if (!isVisibleRef.current) return;

      if (timestamp - lastFrameTime < FRAME_INTERVAL) return;
      lastFrameTime = timestamp;

      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      const width = canvas.width / dpr;
      const height = canvas.height / dpr;
      const centerX = width / 2;
      const centerY = height / 2;
      
      const r = rotationRef.current;

      // Raw JS Smooth Zooming
      r.zoom = lerp(r.zoom, r.zoomTarget, 0.08);

      const baseRadius = Math.min(width, height) * 0.35 * r.zoom;

      if (lastRenderState !== `${centerX}-${centerY}-${baseRadius}`) {
        lastRenderState = `${centerX}-${centerY}-${baseRadius}`;
        cachedOuterGlow = ctx.createRadialGradient(centerX, centerY, baseRadius * 0.6, centerX, centerY, baseRadius * 1.45);
        cachedOuterGlow.addColorStop(0, 'rgba(124, 58, 237, 0.22)');
        cachedOuterGlow.addColorStop(0.4, 'rgba(236, 72, 153, 0.14)');
        cachedOuterGlow.addColorStop(0.75, 'rgba(56, 189, 248, 0.08)');
        cachedOuterGlow.addColorStop(1, 'rgba(0, 0, 0, 0)');

        cachedOceanShading = ctx.createRadialGradient(centerX - baseRadius * 0.35, centerY - baseRadius * 0.35, baseRadius * 0.1, centerX, centerY, baseRadius);
        cachedOceanShading.addColorStop(0, 'rgba(15, 23, 42, 0.95)');
        cachedOceanShading.addColorStop(0.65, 'rgba(10, 15, 30, 0.96)');
        cachedOceanShading.addColorStop(0.92, 'rgba(124, 58, 237, 0.35)');
        cachedOceanShading.addColorStop(1, 'rgba(236, 72, 153, 0.65)');

        cachedHalo = ctx.createRadialGradient(0, 0, 0, 0, 0, 1);
        cachedHalo.addColorStop(0, 'rgba(124, 58, 237, 1)');
        cachedHalo.addColorStop(1, 'rgba(124, 58, 237, 0)');

        cachedHaloSelect = ctx.createRadialGradient(0, 0, 0, 0, 0, 1);
        cachedHaloSelect.addColorStop(0, 'rgba(236, 72, 153, 1)');
        cachedHaloSelect.addColorStop(1, 'rgba(236, 72, 153, 0)');
      }

      ctx.fillStyle = getComputedStyle(document.documentElement)
        .getPropertyValue('--background')
        .trim() || '#07090e';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.save();
      ctx.scale(dpr, dpr);

      // Raw JS smooth flying & inertia
      if (r.isFlying) {
        let diffY = r.targetRy - r.ry;
        while (diffY < -Math.PI) diffY += Math.PI * 2;
        while (diffY > Math.PI) diffY -= Math.PI * 2;
        
        r.ry += diffY * 0.05;
        r.rx = lerp(r.rx, r.targetRx, 0.05);

        if (Math.abs(diffY) < 0.001 && Math.abs(r.targetRx - r.rx) < 0.001) {
          r.isFlying = false;
          r.dragVelocityX = 0.0005;
        }
      } else if (!r.isDragging) {
        if (isAutoRotatingRef.current) r.ry += 0.003;
        r.ry += r.dragVelocityX;
        r.rx += r.dragVelocityY;
        r.dragVelocityX *= 0.93;
        r.dragVelocityY *= 0.93;
      }

      r.rx = Math.max(-1.1, Math.min(1.1, r.rx));
      arcPulsePhase = (arcPulsePhase + 0.02) % (Math.PI * 2);

      const cosX = Math.cos(r.rx);
      const sinX = Math.sin(r.rx);
      const cosY = Math.cos(r.ry);
      const sinY = Math.sin(r.ry);

      const project3D = (x, y, z, scaleMultiplier = 1.0) => {
        const x1 = x * cosY - z * sinY;
        const z1 = z * cosY + x * sinY;
        const y2 = y * cosX - z1 * sinX;
        const z2 = z1 * cosX + y * sinX;
        const fov = 380;
        const perspective = fov / (fov + z2 * baseRadius * 0.85);
        const screenX = centerX + x1 * baseRadius * scaleMultiplier * perspective;
        const screenY = centerY + y2 * baseRadius * scaleMultiplier * perspective;
        return { screenX, screenY, zDepth: z2, perspective };
      };

      ctx.fillStyle = cachedOuterGlow;
      ctx.fillRect(centerX - baseRadius * 1.5, centerY - baseRadius * 1.5, baseRadius * 3, baseRadius * 3);

      ctx.fillStyle = cachedOceanShading;
      ctx.beginPath();
      ctx.arc(centerX, centerY, baseRadius, 0, Math.PI * 2);
      ctx.fill();

      ctx.strokeStyle = 'rgba(167, 139, 250, 0.35)';
      ctx.lineWidth = 1.2;
      ctx.stroke();

      const latitudes = [-0.65, -0.35, 0, 0.35, 0.65];
      latitudes.forEach((latY) => {
        const isEquator = latY === 0;
        const latRadius = Math.sqrt(1 - latY * latY);
        ctx.beginPath();
        let first = true;
        for (let a = 0; a <= Math.PI * 2 + 0.1; a += 0.15) {
          const x = Math.cos(a) * latRadius;
          const z = Math.sin(a) * latRadius;
          const proj = project3D(x, latY, z);
          if (proj.zDepth > -0.2) {
            if (first) { ctx.moveTo(proj.screenX, proj.screenY); first = false; } 
            else { ctx.lineTo(proj.screenX, proj.screenY); }
          } else { first = true; }
        }
        ctx.strokeStyle = isEquator ? 'rgba(236, 72, 153, 0.45)' : 'rgba(124, 58, 237, 0.16)';
        ctx.lineWidth = isEquator ? 1.4 : 0.75;
        ctx.stroke();
      });

      for (let m = 0; m < 8; m++) {
        const lonAngle = (m * Math.PI) / 8;
        ctx.beginPath();
        let first = true;
        for (let a = -Math.PI / 2; a <= Math.PI / 2 + 0.1; a += 0.15) {
          const latY = Math.sin(a);
          const radAtY = Math.cos(a);
          const x = Math.cos(lonAngle) * radAtY;
          const z = Math.sin(lonAngle) * radAtY;
          const proj = project3D(x, latY, z);
          if (proj.zDepth > -0.2) {
            if (first) { ctx.moveTo(proj.screenX, proj.screenY); first = false; } 
            else { ctx.lineTo(proj.screenX, proj.screenY); }
          } else { first = true; }
        }
        ctx.strokeStyle = 'rgba(124, 58, 237, 0.14)';
        ctx.lineWidth = 0.8;
        ctx.stroke();
      }

      continentPoints.forEach((pt) => {
        const proj = project3D(pt.x, pt.y, pt.z);
        if (proj.zDepth > -0.15) {
          const depthAlpha = Math.max(0.1, (proj.zDepth + 0.15) / 1.15);
          const dotSize = Math.max(0.8, 1.4 * proj.perspective * (proj.zDepth > 0.3 ? 1.2 : 0.9));
          ctx.fillStyle = `rgba(52, 211, 153, ${depthAlpha * pt.brightness * 0.75})`;
          ctx.fillRect(proj.screenX - dotSize, proj.screenY - dotSize, dotSize * 2, dotSize * 2);
        }
      });

      const homeProj = project3D(homeBaseLocation.x, homeBaseLocation.y, homeBaseLocation.z);
      if (homeProj.zDepth > -0.1) {
        const depthAlpha = Math.max(0.2, (homeProj.zDepth + 0.1) / 1.1);
        const radarSize = (10 + Math.sin(arcPulsePhase * 3) * 4) * homeProj.perspective;
        ctx.beginPath();
        ctx.arc(homeProj.screenX, homeProj.screenY, radarSize, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(236, 72, 153, ${0.8 * depthAlpha})`;
        ctx.lineWidth = 1.2;
        ctx.stroke();

        ctx.fillStyle = '#EC4899';
        ctx.fillRect(homeProj.screenX - 2, homeProj.screenY - 2, 4, 4);

        if (homeProj.zDepth > 0.2) {
          ctx.font = '600 10px "Plus Jakarta Sans", sans-serif';
          ctx.fillStyle = '#F472B6';
          ctx.fillText('🇧🇩 Rajshahi (HQ)', homeProj.screenX + 8, homeProj.screenY - 6);
        }
      }

      const projectedSkills = skill3DPoints.map((pt) => {
        const proj = project3D(pt.x, pt.y, pt.z, 1.08);
        return { ...pt, screenX: proj.screenX, screenY: proj.screenY, zDepth: proj.zDepth, perspective: proj.perspective };
      });
      projectedSkills.sort((a, b) => a.zDepth - b.zDepth);

      const currentActiveSkill = activeSkillRef.current;
      const currentSelectedCategory = selectedCategoryRef.current;

      for (let i = 0; i < projectedSkills.length; i++) {
        const s1 = projectedSkills[i];
        if (s1.zDepth < -0.2) continue;
        for (let j = i + 1; j < projectedSkills.length; j++) {
          const s2 = projectedSkills[j];
          if (s2.zDepth < -0.2) continue;

          const isConnectedCategory = s1.skill.category === s2.skill.category;
          const isSelectedLink = currentActiveSkill && (s1.skill.name === currentActiveSkill.name || s2.skill.name === currentActiveSkill.name);

          const dx = s1.screenX - s2.screenX;
          const dy = s1.screenY - s2.screenY;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < (isSelectedLink ? 160 : 90) && (isConnectedCategory || isSelectedLink)) {
            const alpha = (1 - dist / (isSelectedLink ? 160 : 90)) * (isSelectedLink ? 0.65 : 0.22) * ((s1.zDepth + 1) / 2);
            const midX = (s1.screenX + s2.screenX) / 2;
            const midY = (s1.screenY + s2.screenY) / 2 - dist * 0.15;
            
            ctx.beginPath();
            ctx.moveTo(s1.screenX, s1.screenY);
            ctx.quadraticCurveTo(midX, midY, s2.screenX, s2.screenY);
            ctx.strokeStyle = isSelectedLink ? `rgba(236, 72, 153, ${alpha})` : `rgba(167, 139, 250, ${alpha})`;
            ctx.lineWidth = isSelectedLink ? 1.6 : 0.8;
            ctx.stroke();
          }
        }
      }

      projectedSkills.forEach((node) => {
        const isSelected = currentActiveSkill?.name === node.skill.name;
        const isCategoryMatch = currentSelectedCategory === 'all' || node.skill.category === currentSelectedCategory;
        const isFront = node.zDepth > 0.05;
        const baseAlpha = Math.max(0.18, (node.zDepth + 0.9) / 1.9);
        const finalAlpha = isCategoryMatch ? baseAlpha : baseAlpha * 0.25;

        if (isFront || isSelected) {
          const haloRadius = (isSelected ? 26 : 14) * node.perspective;
          ctx.save();
          ctx.translate(node.screenX, node.screenY);
          ctx.scale(haloRadius, haloRadius);
          ctx.globalAlpha = isSelected ? 0.9 : (0.45 * finalAlpha);
          ctx.fillStyle = isSelected ? cachedHaloSelect : cachedHalo;
          ctx.beginPath();
          ctx.arc(0, 0, 1, 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();
        }

        const dotRadius = (isSelected ? 6 : 3.6) * node.perspective;
        ctx.fillStyle = isSelected ? '#DB2777' : isCategoryMatch ? (isFront ? '#C4B5FD' : 'rgba(167, 139, 250, 0.45)') : 'rgba(100, 116, 139, 0.3)';
        ctx.fillRect(node.screenX - dotRadius, node.screenY - dotRadius, dotRadius * 2, dotRadius * 2);

        if (isFront || isSelected) {
          const fontSize = Math.max(13, Math.min(19, 15.5 * node.perspective * (isSelected ? 1.3 : 1)));
          ctx.font = `${isSelected ? '700' : '600'} ${fontSize}px "Plus Jakarta Sans", sans-serif`;

          const text = node.skill.name;
          const textMetrics = ctx.measureText(text);
          const padX = 12 * node.perspective;
          const padY = 6.5 * node.perspective;
          const tagW = textMetrics.width + padX * 2;
          const tagH = fontSize + padY * 2;
          const tagX = node.screenX - tagW / 2;
          const tagY = node.screenY - tagH - 8 * node.perspective;

          ctx.fillStyle = isSelected ? 'rgba(23, 15, 38, 0.98)' : `rgba(9, 12, 22, ${Math.min(0.95, finalAlpha * 1.35)})`;
          ctx.strokeStyle = isSelected ? '#DB2777' : (isCategoryMatch ? `rgba(139, 92, 246, ${0.8 * finalAlpha})` : 'rgba(51, 65, 85, 0.35)');
          ctx.lineWidth = isSelected ? 2.2 : 1.4;

          ctx.beginPath();
          ctx.roundRect(tagX, tagY, tagW, tagH, 8 * node.perspective);
          ctx.fill();
          ctx.stroke();

          ctx.fillStyle = isSelected ? '#FFFFFF' : (isCategoryMatch ? (isFront ? '#FFFFFF' : `rgba(241, 245, 249, ${finalAlpha})`) : `rgba(148, 163, 184, ${finalAlpha * 0.5})`);
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillText(text, node.screenX, tagY + tagH / 2);
        }
      });

      ctx.restore();
    };

    startLoop();

    return () => {
      stopLoop();
      resizeObserver.disconnect();
      visibilityObserver.disconnect();
    };
  }, [continentPoints, skill3DPoints, homeBaseLocation, isDesktop]); // isDesktop ডিপেন্ডেন্সি অ্যাড করা হয়েছে

  const handlePointerDown = (e) => {
    rotationRef.current.isDragging = true;
    rotationRef.current.lastMouseX = e.clientX;
    rotationRef.current.lastMouseY = e.clientY;
    rotationRef.current.dragVelocityX = 0;
    rotationRef.current.dragVelocityY = 0;
    e.target.setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e) => {
    if (!rotationRef.current.isDragging) return;
    const deltaX = e.clientX - rotationRef.current.lastMouseX;
    const deltaY = e.clientY - rotationRef.current.lastMouseY;
    rotationRef.current.ry += deltaX * 0.0055;
    rotationRef.current.rx += deltaY * 0.0055;
    rotationRef.current.rx = Math.max(-1.1, Math.min(1.1, rotationRef.current.rx));
    rotationRef.current.dragVelocityX = deltaX * 0.0035;
    rotationRef.current.dragVelocityY = deltaY * 0.0035;
    rotationRef.current.lastMouseX = e.clientX;
    rotationRef.current.lastMouseY = e.clientY;
  };

  const handlePointerUp = (e) => {
    rotationRef.current.isDragging = false;
    try { e.target.releasePointerCapture(e.pointerId); } catch {}
  };

  // GSAP ছাড়া Raw JS জুম
  const handleZoom = (direction) => {
    let nextZoom = rotationRef.current.zoomTarget;
    if (direction === 'in') nextZoom = Math.min(1.4, nextZoom + 0.15);
    if (direction === 'out') nextZoom = Math.max(0.7, nextZoom - 0.15);
    if (direction === 'reset') nextZoom = 1.0;
    rotationRef.current.zoomTarget = nextZoom;
  };

  // GSAP ছাড়া রোটেশন রিসেট
  const handleResetOrientation = () => {
    rotationRef.current.isFlying = true;
    rotationRef.current.targetRx = 0.35;
    rotationRef.current.targetRy = 2.1;
    rotationRef.current.zoomTarget = 1.0;
    rotationRef.current.dragVelocityX = 0;
    rotationRef.current.dragVelocityY = 0;
  };

  return (
    <div className="relative w-full rounded-3xl bg-slate-950/85 border border-purple-500/25 backdrop-blur-2xl p-4 sm:p-6 lg:p-8 overflow-hidden shadow-2xl">
      
      {/* শুধুমাত্র ডেস্কটপে গ্লোব কন্ট্রোলার দেখাবে */}
      {isDesktop ? (
        <div className="flex flex-wrap items-center justify-between gap-4 pb-4 mb-4 border-b border-slate-800/80">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-purple-950/80 border border-purple-500/40 text-pink-400 shadow-md">
              <HiOutlineGlobeAsiaAustralia className="w-5 h-5 animate-spin-cw-fast" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-sm font-display font-bold text-white tracking-wide">
                  My Tech Universe, In Orbit
                </h3>
              </div>
              <p className="text-xs text-slate-400 font-mono">
                Drag to rotate • Click a skill to see details
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button type="button" onClick={handleFlyHome} aria-label="Fly to Rajshahi HQ" className="btn-shimmer flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900/90 border border-pink-500/40 hover:border-pink-500 text-xs font-mono text-pink-300 hover:text-white transition-all cursor-pointer shadow-sm">
              <HiOutlineMapPin className="w-3.5 h-3.5 text-pink-400" />
              <span>HQ: Rajshahi</span>
            </button>

            <button type="button" onClick={() => setIsAutoRotating(!isAutoRotating)} aria-label="Toggle Auto Orbit" className="btn-shimmer flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900/90 border border-purple-500/30 hover:border-purple-400 text-xs font-mono text-slate-300 hover:text-white transition-all cursor-pointer">
              {isAutoRotating ? <HiOutlinePause className="w-3.5 h-3.5 text-pink-400" /> : <HiOutlinePlay className="w-3.5 h-3.5 text-purple-400" />}
              <span>{isAutoRotating ? 'Pause Orbit' : 'Auto Orbit'}</span>
            </button>

            <div className="flex items-center rounded-xl bg-slate-900 border border-slate-800 p-0.5">
              <button type="button" onClick={() => handleZoom('in')} aria-label="Zoom In 3D Globe" className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors cursor-pointer">
                <HiOutlineMagnifyingGlassPlus className="w-3.5 h-3.5" />
              </button>
              <button type="button" onClick={() => handleZoom('out')} aria-label="Zoom Out 3D Globe" className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors cursor-pointer">
                <HiOutlineMagnifyingGlassMinus className="w-3.5 h-3.5" />
              </button>
            </div>

            <button type="button" onClick={handleResetOrientation} aria-label="Reset Globe Rotation" className="btn-shimmer flex items-center gap-1 px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-purple-500/50 text-xs font-mono text-slate-400 hover:text-white transition-all cursor-pointer">
              <HiOutlineArrowPath className="w-3.5 h-3.5 text-purple-400" />
              <span>Reset</span>
            </button>
          </div>
        </div>
      ) : (
        // মোবাইলের জন্য সিম্পল হেডার
        <div className="mb-4 pb-4 border-b border-slate-800/80">
          <h3 className="text-sm font-display font-bold text-white tracking-wide flex items-center gap-2">
            <HiOutlineCube className="w-5 h-5 text-purple-400" />
            Technical Stack Overview
          </h3>
          <p className="text-xs text-slate-400 mt-1">Tap any skill to view details.</p>
        </div>
      )}

      {/* শুধুমাত্র ডেস্কটপে ক্যানভাস রেন্ডার হবে */}
      {isDesktop && (
        <div
          ref={containerRef}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
          className="relative w-full h-[450px] sm:h-[540px] flex items-center justify-center cursor-grab active:cursor-grabbing select-none touch-none will-change-transform"
        >
          <canvas ref={canvasRef} className="w-full h-full block will-change-transform" />

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 pointer-events-none flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-950/90 border border-purple-500/30 text-[11px] font-mono text-purple-300 backdrop-blur-md shadow-lg">
            <TbCompass className="w-3.5 h-3.5 text-pink-400 animate-spin-cw-fast" />
            <span>Click & Drag to spin Planet Earth • Click any technology to inspect</span>
          </div>
        </div>
      )}

      {/* স্কিল লিস্ট এবং ফিল্টার সবার জন্যই থাকবে */}
      <div className={`${isDesktop ? 'mt-6 pt-5 border-t border-slate-800/80' : ''}`}>
        <div className="flex items-center gap-1.5 overflow-x-auto pb-2 mb-3.5 scrollbar-none">
          {categories.map((cat) => {
            const isCatActive = currentCategory === cat.id;
            const count = cat.id === 'all' ? skills.length : skills.filter(s => s.category === cat.id).length;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setCurrentCategory(cat.id)}
                className={`btn-shimmer px-3 py-1.5 rounded-xl text-xs font-mono whitespace-nowrap transition-all cursor-pointer flex-shrink-0 flex items-center gap-1.5 ${
                  isCatActive ? 'bg-brand-gradient text-white font-bold shadow-md shadow-pink-500/25' : 'bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-slate-200'
                }`}
              >
                <span>{cat.label}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${isCatActive ? 'bg-white/20 text-white' : 'bg-slate-800 text-slate-400'}`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 max-h-[300px] overflow-y-auto p-1.5 pr-2 rounded-2xl bg-slate-950/60 border border-slate-800/80 scrollbar-thin">
          {skills.filter((s) => currentCategory === 'all' || s.category === currentCategory).map((s) => {
            const isSelected = activeSkill?.name === s.name;
            const Icon = skillIconMap[s.name] || HiOutlineCube;
            return (
              <button
                key={s.name}
                type="button"
                onClick={() => handleSelectSkillNode(s)}
                className={`btn-shimmer text-left p-2.5 rounded-xl transition-all cursor-pointer flex items-center gap-2.5 group ${
                  isSelected ? 'bg-brand-gradient text-white font-semibold shadow-lg shadow-pink-500/30 scale-[1.02] border border-pink-400/50' : 'bg-slate-900/70 border border-slate-800/80 hover:border-purple-500/50 text-slate-300 hover:text-white'
                }`}
              >
                <div className={`p-1.5 rounded-lg flex-shrink-0 ${isSelected ? 'bg-white/20 text-white' : 'bg-purple-950/60 text-purple-400 group-hover:text-pink-300'}`}>
                  <Icon className="w-4 h-4" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-xs font-semibold truncate leading-tight">{s.name}</div>
                  <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 mt-0.5">
                    <span className="capitalize truncate opacity-80">{s.category}</span>
                    <span className={isSelected ? 'text-white/90 font-bold' : 'text-pink-400'}>{s.level}</span>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {activeSkill && (
        <div className="mt-4 p-5 rounded-2xl bg-slate-900/95 border border-pink-500/60 backdrop-blur-xl shadow-xl flex flex-col sm:flex-row sm:items-center justify-between gap-4 animate-fadeIn">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-2xl bg-brand-gradient text-white shadow-lg">
              {React.createElement(skillIconMap[activeSkill.name] || HiOutlineCube, { className: 'w-6 h-6' })}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h4 className="text-base font-display font-bold text-white">{activeSkill.name}</h4>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-purple-950 border border-purple-500/40 text-pink-300">{activeSkill.level}</span>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-slate-800 text-slate-300 capitalize">{activeSkill.category}</span>
              </div>
              <p className="text-xs text-slate-300 mt-1">{activeSkill.description}</p>
            </div>
          </div>
          {isDesktop && (
            <div className="flex items-center gap-2 self-end sm:self-center flex-shrink-0">
              <button
                type="button"
                onClick={() => handleSelectSkillNode(activeSkill)}
                className="btn-shimmer flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-brand-gradient hover:bg-brand-gradient-hover text-xs font-mono text-white shadow-md shadow-pink-500/25 transition-all cursor-pointer font-semibold"
              >
                <HiOutlineBolt className="w-3.5 h-3.5" />
                <span>Orbit Target</span>
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}