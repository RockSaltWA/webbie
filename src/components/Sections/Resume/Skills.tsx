import {FC, memo, PropsWithChildren, useMemo} from 'react';

import {Skill as SkillType, SkillGroup as SkillGroupType} from '../../../data/dataDef';

export const SkillGroup: FC<PropsWithChildren<{ skillGroup: SkillGroupType }>> = memo(({skillGroup}) => {
    const {name, skills} = skillGroup;

    const max = skills[0]?.max || 10; // assuming all skills in a group have the same max, if not, calculate the maximum value among all skills

    const tickMarks = useMemo(() => {
        const ticks = [];
        for (let i = 0; i <= max; i++) {
            ticks.push(i);
        }
        return ticks;
    }, [max]);

    return (
        <div className="flex flex-col">
            <span className="text-center text-lg font-bold">{name}</span>
            <div className="flex flex-col gap-y-2">
                {skills.map((skill, index) => (
                    <Skill key={`${skill.name}-${index}`} skill={skill} />
                ))}
            </div>
            <div className="flex justify-between mt-1">
                {tickMarks.map((tick, index) => (
                    <span className="text-xs" key={index}>{tick}</span>
                ))}
            </div>
        </div>
    );
});

SkillGroup.displayName = 'SkillGroup';

export const Skill: FC<{ skill: SkillType }> = memo(({skill}) => {
    const {name, level, max = 10} = skill;
    const percentage = useMemo(() => Math.round((level / max) * 100), [level, max]);

    return (
        <div className="flex flex-col">
            <span className="ml-2 text-sm font-medium">{name}</span>
            <div className="h-5 w-full overflow-hidden rounded-full bg-neutral-300">
                <div className="h-full rounded-full bg-green-400" style={{width: `${percentage}%`}} />
            </div>
        </div>
    );
});

Skill.displayName = 'Skill';