package com.elearning.pojos;

import java.time.LocalDate;
import java.time.LocalDateTime;

import org.hibernate.annotations.UpdateTimestamp;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import jakarta.persistence.Column;
import jakarta.persistence.EntityListeners;
import jakarta.persistence.MappedSuperclass;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@MappedSuperclass
@Getter
@Setter
@NoArgsConstructor
@ToString
@EntityListeners(AuditingEntityListener.class)
public class BaseEntity {
	
	@CreatedDate
	@Column(name = "created_on",updatable = false)
	private LocalDate createdOn;
	
	@UpdateTimestamp
	@Column(name = "updated_on")
	private LocalDateTime updatedOn;
	
}
